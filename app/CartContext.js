'use client'
import React, { createContext, useState, useEffect } from 'react';

// Création du contexte du panier
const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Initialisation de l'état cart seulement côté client
    const [cart, setCart] = useState(() => {
        // Vérifie si le code s'exécute côté client
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('cart');
            return data ? JSON.parse(data) : [];
        }
        return [];
    });

    const [downloadFiles, setDownloadFiles] = useState(() => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('downloadItem');
            return data ? JSON.parse(data) : [];
        }
        return [];
    })

    const [downloadFilesPaid, setDownloadFilesPaid] = useState(() => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('downloadItemPaid');
            return data ? JSON.parse(data) : [];
        }
        return [];
    })

    // Effectuer des opérations sur localStorage uniquement côté client
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('downloadItem', JSON.stringify(downloadFiles));
        }
    }, [downloadFiles])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('downloadItemPaid', JSON.stringify(downloadFilesPaid));
        }
    }, [downloadFilesPaid])

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };

    const removeFromCart = (photo) => {
        setCart(prevCart => prevCart.filter(item => item.path !== photo.path));
    };


    return (
        <CartContext.Provider value={{ cart, setCart, downloadFiles, setDownloadFiles, downloadFilesPaid, setDownloadFilesPaid, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };