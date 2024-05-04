'use client'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import styles from './CartComponent.module.css';
import trash from '../../../public/icons/trash.svg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import arrowRight from '../../../public/icons/arrowRight.svg';
import Loader from '../Loader/Loader';
import { v4 as uuidv4 } from 'uuid';
import { CartContext } from '@/app/CartContext';
import Button from '../Button/Button';

const CartComponent = () => {
    const router = useRouter();
    // const [cartItems, setCart] = useState([]);
    const { cart, removeFromCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [pageLoading, setPageLoading] = useState(true);
    const [galleryParams, setGalleryParams] = useState(() => {
        if (typeof window !== 'undefined') {  // Vérifie si le code s'exécute côté client
            const savedParams = localStorage.getItem('params');
            return savedParams ? JSON.parse(savedParams) : undefined;
        }
        return undefined;
    });

    // Calcul total du panier
    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + item.price, 0));
        setPageLoading(false);
    }, [cart]);


    // Ajouter des photos 
    const addPhotosToCart = () => {
        if (galleryParams) {
            if (galleryParams.id) {
                router.push(`/galeries/${galleryParams.slug}/${galleryParams.id}`)
            } else {
                router.push(`/galeries/${galleryParams.slug}`)
            }
        }
    }

    const handlePaymentButton = (e) => {
        e.preventDefault();
        const transactionId = uuidv4(); // Génère un ID unique
        router.push(`/panier/${transactionId}`);
    }

    const handleEmptyCart = () => {
        if (galleryParams) {
            if (galleryParams.id) {
                router.push(`/galeries/${galleryParams.slug}/${galleryParams.id}`)
            } else {
                router.push(`/galeries/${galleryParams.slug}`)
            }
        }
    }

    if (pageLoading) {
        return <Loader />
    }

    return (
        <section className={styles.container}>
            {cart.length === 0 &&
                <div className={styles.emptyCart__message}>
                    <p>Votre panier est vide</p>
                    <Button type={'primary'} content={'Acheter des photos'} size={'small'} action={handleEmptyCart} />
                </div>
            }
            {cart.length !== 0 &&
                <>
                    <ul className={styles.cartItems__list}>
                        {cart.map((photo, index) => (
                            <li key={index} className={styles.cartItems__li}>
                                <div className={styles.cartItems__wrapper}>
                                    <div className={styles.photoAndRemove__wrapper}>
                                        <Image src={photo.path}
                                            width={80}
                                            height={80}
                                            alt='photo'
                                            noindex="true"
                                            className={styles.cartItems__photos}
                                            draggable="false"
                                            quality={100} />
                                        <motion.div className={styles.trash__container}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => { removeFromCart(photo); }}
                                        >
                                            <Image src={trash} width={16} height={16} alt='icone poubelle' />
                                            <p>Retirer</p>
                                        </motion.div>
                                    </div>

                                    <span>{photo.price}€</span>
                                </div>
                                <div className={styles.line}></div>
                            </li>
                        ))}
                        <motion.button
                            className={styles.add__photos}
                            onClick={addPhotosToCart}
                            whileHover={{ scale: 1.05, color: "var(--neutrals-200)", border: "2px solid var(--neutrals-200)" }}
                            whileTap={{ scale: 0.95 }}>
                            Ajouter des photos
                        </motion.button>
                    </ul>
                    <div className={styles.payment__container}>
                        <div className={styles.price}>
                            <p className={styles.price__totalText}>TOTAL</p>
                            <p className={styles.price__total}>{total}€</p>
                        </div>
                        <motion.button
                            className={styles.payment__button}
                            onClick={(e) => { handlePaymentButton(e) }}
                            whileHover={{ scale: 1.03, opacity: 0.9 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Finalisez votre commande
                            <Image src={arrowRight} width={24} height={24} alt='icone fleche vers la droite' />
                        </motion.button>
                    </div>
                </>
            }
        </section>
    );
};

export default CartComponent;