'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from './GaleryPagesPhotos.module.css';
import Loader from '../Loader/Loader';
import Image from 'next/image';
import addToCartIcon from '../../../public/icons/addToCart.svg';
import checkIcon from '../../../public/icons/check.svg';
import cartIcon from '../../../public/icons/cart.svg';
import downloadIcon from '../../../public/icons/downloadBlack.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CartContext } from '@/app/CartContext';
import { useRouter } from 'next/navigation';

const GaleryPagesPhotos = ({ photos, params }) => {
    const blurDataUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c2NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiI+PC9mZUdhdXNzaWFuQmx1cj48L3JlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgwLDAsMCwwLjUpIiBmaWx0ZXI9InVybCgjYikiIC8+PC9zdmc+";
    const router = useRouter();
    const [photosList, setPhotosList] = useState([]);
    const [freePhotos, setFreePhotos] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    let pressTimer;

    useEffect(() => {
        if (photos) {
            const freePhotosCount = photos.filter(photo => photo.price === 0).length;
            setFreePhotos(freePhotosCount);
            setPhotosList(photos);
            setIsLoading(false);
        }
    }, [photos]);

    const handleTouchStart = (event) => {
        // Empêche l'ouverture du menu contextuel sur iOS
        event.preventDefault();

        // Démarre le chronomètre pour détecter l'appui long
        pressTimer = setTimeout(() => {
            // Action à exécuter lorsqu'un appui long est détecté
            alert("Merci de ne pas rester appuyé sur l'image.");
        }, 500);
    };

    const handleTouchEnd = () => {
        // Réinitialise le chronomètre si le doigt est levé avant la fin du délai
        clearTimeout(pressTimer);
    };

    const handleAddToCartClick = (event, photo) => {
        event.preventDefault();
        const isAlreadyInCart = cart.some((element) => element.path === photo.path);
        if (isAlreadyInCart) {
            removeFromCart(photo);
        } else {
            addToCart(photo);
            localStorage.setItem('params', JSON.stringify(params));
        }
    };

    const handleDownload = (photo) => {
        const isAlreadyInCart = cart.some((element) => element.path === photo.path);
        if (isAlreadyInCart) {
            removeFromCart(photo);
        } else {
            addToCart(photo);
            localStorage.setItem('params', JSON.stringify(params));
        }
        fetch(photo.path)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = photo.path.split('/').pop();
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(() => alert('Failed to download photo'));
    };

    const isPhotoInCart = (photo) => {
        return cart.some((element) => element.path === photo.path);
    };

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className={styles.photosSection__container} id='photosSection'>
            <header className={styles.photosSection__header}>
                <h2>Les photos du shooting</h2>
            </header>
            {freePhotos !== 0 &&
                <p className={styles.freePhoto__message}>{freePhotos} photo gratuite ! Si vous souhaitez changer la photo gratuite <Link href={"mailto:myogi.photo@gmail.com"}>Contactez-moi.</Link></p>
            }
            <ul className={styles.photos__list}>
            {isLoading ? ( // Afficher le loader si isLoading est vrai
                    <Loader />
                ) : (
                    photosList.map((photo, index) => (
                        <li className={styles.photos__container} key={index} onContextMenu={(event) => event.preventDefault()}>
                            <span className={styles.photos__price}>{photo.price}€</span>
                            <Image
                                src={photo.path}
                                className={styles.photos}
                                width={720}
                                height={720}
                                quality={60}
                                sizes='80vw'
                                alt='photos'
                                draggable="false"
                                loading='lazy'
                                noindex="true"
                                placeholder='blur'
                                blurDataURL={blurDataUrl}
                                onContextMenu={(event) => event.preventDefault()}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd} 
                                onLoad={() => setIsLoading(false)}/>
                            {photo.price !== 0 && ( // Ajout de la condition pour exclure les photos gratuites
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
                            )}
                            {photo.price === 0 && ( // Ajout du bouton de téléchargement pour les photos gratuites
                                <motion.button
                                    className={styles.photos__addToCart}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleDownload(photo)}
                                >
                                    <Image
                                        src={downloadIcon}
                                        width={30}
                                        height={30}
                                        alt='Icone télécharger' />
                                </motion.button>
                            )}
                        </li>
                    ))
                )}
            </ul>
            <motion.button
                className={styles.cartButton__page}
                onClick={() => { router.push('/panier') }}>
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
                            <Image src={cartIcon} width={28} height={28} alt='icone panier' />
                            <p>{cart.length}</p>
                        </div>
                        <p className={styles.seeCart__text}>Voir le panier</p>
                    </Link>
                </motion.div>
            }
        </section>
    );
};

export default GaleryPagesPhotos;
