'use client'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import styles from './CartComponent.module.css';
import trash from '../../../public/icons/trash.svg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import arrowRight from '../../../public/icons/arrowRight.svg';
import Loader from '../Loader/Loader';
import { v4 as uuidv4 } from 'uuid';
import { CartContext } from '@/app/CartContext';
import Button from '../Button/Button';
import Link from 'next/link';

const CartComponent = () => {
    const blurDataUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c2NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiI+PC9mZUdhdXNzaWFuQmx1cj48L3JlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgwLDAsMCwwLjUpIiBmaWx0ZXI9InVybCgjYikiIC8+PC9zdmc+";
    const router = useRouter();
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
        } else {
            router.push('/')
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
                    {galleryParams ?
                        <Button type={'primary'} content={'Ajouter des photos'} size={'small'} action={handleEmptyCart} />
                        :
                        <Button type={'primary'} content={"Retour page d'accueil"} size={'small'} link={'/'} />
                    }
                </div>
            }
            {cart.length !== 0 &&
                <>
                    <ul className={styles.cartItems__list}>
                        {cart.map((photo, index) => (
                            <li key={index} className={styles.cartItems__li} onContextMenu={(event) => event.preventDefault()}>
                                <div className={styles.cartItems__wrapper}>
                                    <div className={styles.photoAndRemove__wrapper}>
                                        <Image src={photo.path}
                                            width={80}
                                            height={80}
                                            alt='photo'
                                            noindex="true"
                                            className={styles.cartItems__photos}
                                            draggable="false"
                                            quality={50}
                                            placeholder='blur'
                                            blurDataURL={blurDataUrl} />
                                        <motion.div className={styles.trash__container}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => { removeFromCart(photo); }}
                                        >
                                            <Image src={trash} width={16} height={16} alt='icone poubelle' />
                                            <p>Retirer</p>
                                        </motion.div>
                                    </div>
                                    <span className={styles.cartItems__price}>{photo.price}€</span>
                                </div>
                                <div className={styles.line}></div>
                            </li>
                        ))}
                    </ul>
                    <motion.button
                        className={styles.add__photos}
                        onClick={addPhotosToCart}
                        whileHover={{ scale: 1.05, color: "var(--neutrals-200)", border: "2px solid var(--neutrals-200)" }}
                        whileTap={{ scale: 0.95 }}>
                        Ajouter des photos
                    </motion.button>
                    <div className={styles.payment__container}>
                        <div className={styles.price}>
                            <p className={styles.price__totalText}>TOTAL</p>
                            <p className={styles.price__total}>{total}€</p>
                        </div>
                        <div className={styles.buttons__container}>
                        <motion.button
                            className={styles.payment__button}
                            onClick={(e) => { handlePaymentButton(e) }}
                            whileHover={{ scale: 1.03, opacity: 0.9 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Finalisez votre commande
                            <Image src={arrowRight} width={24} height={24} alt='icone fleche vers la droite' />
                        </motion.button>
                        <motion.button className={styles.conditions__button}>
                            <Link href='/conditions-generales-de-vente'>
                            Conditions générales de vente
                            </Link>
                        </motion.button>
                        </div>
                    </div>
                </>
            }
        </section>
    );
};

export default CartComponent;