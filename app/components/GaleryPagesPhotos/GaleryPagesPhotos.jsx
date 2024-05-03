'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from './GaleryPagesPhotos.module.css';
import Loader from '../Loader/Loader';
import Image from 'next/image';
import addToCartIcon from '../../../public/icons/addToCart.svg';
import checkIcon from '../../../public/icons/check.svg';
import cartIcon from '../../../public/icons/cart.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CartContext } from '@/app/CartContext';
import { useRouter } from 'next/navigation';

const GaleryPagesPhotos = ({ photos, free, params }) => {
    const router = useRouter();
    const [photosList, setPhotosList] = useState([]);
    const [freePhotos, setFreePhotos] = useState('0');
    const [isLoading, setIsLoading] = useState(true);

    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    useEffect(() => {
        if (photos) {
            setPhotosList(photos);
            setIsLoading(false);
        }
        if (free) {
            setFreePhotos(free);
        }
    }, [photos, free]);

    const handleAddToCartClick = (event, photo) => {
        event.preventDefault();
        const isAlreadyInCart = cart.some((element) => element.path === photo.path);
        if (isAlreadyInCart) {
            console.log('dans le panier');
            removeFromCart(photo);
        } else {
            addToCart(photo);
            localStorage.setItem('params', JSON.stringify(params));
        }
    };

    const isPhotoInCart = (photo) => {
        return cart.some((element) => element.path === photo.path);
    };

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className={styles.photosSection__container}>
            <header className={styles.photosSection__header}>
                <h2>Les photos du shooting</h2>
            </header>
            {freePhotos !== "0" &&
                <p className={styles.freePhoto__message}>{freePhotos} Photo gratuite au choix</p>
            }
            <ul className={styles.photos__list}>
                {photosList.map((photo, index) => (
                    <li className={styles.photos__container} key={index}>
                        <span className={styles.photos__price}>{photo.price}€</span>
                        <Image
                            src={photo.path}
                            className={styles.photos}
                            width={1920}
                            height={1080}
                            sizes='100vw'
                            alt='photos'
                            draggable="false"
                            noindex="true" />
                        <motion.button
                            className={isPhotoInCart(photo) ? `${styles.photos__inCart} ${styles.photos__addToCart}` : styles.photos__addToCart}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(event) => handleAddToCartClick(event, photo)}
                        >
                            <Image
                                src={isPhotoInCart(photo) ? checkIcon : addToCartIcon}
                                width={30}
                                height={30}
                                alt={isPhotoInCart(photo) ? 'Icone vérifié' : 'Icone ajouter au panier'} />
                        </motion.button>
                    </li>
                ))}
            </ul>
            <motion.button
                className={styles.cartButton__page}
                onClick={() => {router.push('/panier')}}>
                Voir le panier
                <div className={styles.cartButton__page__icon}>
                    <Image src={cartIcon} width={24} height={24} alt='icone panier' />
                    <span>{cart.length}</span>
                </div>
            </motion.button>
            {cart.length > 0 &&
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={styles.seeCart__container}>
                    <Link href={'/panier'} className={styles.linkCart__container}>
                        <div className={styles.seeCart__length}>
                            <Image src={cartIcon} width={24} height={24} alt='icone panier' />
                            <p>{cart.length}</p>
                        </div>
                        <p>Voir le panier</p>
                    </Link>
                </motion.div>
            }
        </section>
    );
};

export default GaleryPagesPhotos;
