'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from './GaleryPagesPhotos.module.css';
import Loader from '../Loader/Loader';
import Image from 'next/image';
import addToCartIcon from '../../../public/icons/addToCart.svg';
import checkIcon from '../../../public/icons/check.svg';
import cartIcon from '../../../public/icons/cart.svg';
import downloadIcon from '../../../public/icons/downloadBlack.svg';
import downloadWhite from '../../../public/icons/downloadWhite.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CartContext } from '@/app/CartContext';
import { useRouter } from 'next/navigation';

// Fonction pour détecter si l'utilisateur utilise un navigateur intégré
const isInAppBrowser = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /Instagram|FBAN|FBAV|Twitter/i.test(userAgent);
};

const GaleryPagesPhotos = ({ photos, params }) => {
    const blurDataUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c2NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiI+PC9mZUdhdXNzaWFuQmx1cj48L3JlY3Qgd2lkdD0iMTAwJSIgZmlsbD0icmdiYSgwLDAsMCwwLjUpIiBmaWx0ZXI9InVybCgjYikiIC8+PC9zdmc+";
    const router = useRouter();
    const [photosList, setPhotosList] = useState([]);
    const [freePhotos, setFreePhotos] = useState(0);
    const [isInApp, setIsInApp] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isDownloadingAll, setIsDownloadingAll] = useState(false);
    const [downloadingPhotos, setDownloadingPhotos] = useState([]);
    const { cart, addToCart, removeFromCart, downloadFiles, setDownloadFiles } = useContext(CartContext);

    useEffect(() => {
        setIsInApp(isInAppBrowser());
        if (photos) {
            const freePhotosCount = photos.filter(photo => photo.price === 0).length;
            setFreePhotos(freePhotosCount);
            setPhotosList(photos);
            setIsLoading(false);
        }
    }, [photos]);

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

    const handleDownload = async (photo) => {
        if (!downloadFiles.some((item) => item.path === photo.path)) {
            setDownloadingPhotos((prev) => [...prev, photo.path]);
            try {
                const response = await fetch(photo.path);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = photo.path.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
    
                setDownloadFiles(prevFiles => {
                    if (!prevFiles.some((item) => item.path === photo.path)) {
                        const newFiles = [...prevFiles, photo];
                        if (newFiles.length > 50) {
                            newFiles.shift(); 
                        }
                        return newFiles;
                    } else {
                        return prevFiles;
                    }
                });
            } catch (error) {
                console.error('Échec du téléchargement de la photo :', error);
            } finally {
                setDownloadingPhotos((prev) => prev.filter((path) => path !== photo.path));
            }
        }
    };
    

    const downloadAllFreePhotos = async () => {
        setIsDownloadingAll(true);
        const freePhotosToDownload = photosList.filter(photo => photo.price === 0);

        for (const photo of freePhotosToDownload) {
            setDownloadingPhotos((prev) => [...prev, photo.path]);
            try {
                const response = await fetch(photo.path);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = photo.path.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);

                setDownloadFiles(prevFiles => {
                    if (!prevFiles.some((item) => item.path === photo.path)) {
                        const newFiles = [...prevFiles, photo];
                        if (newFiles.length > 50) {
                            newFiles.shift(); 
                        }
                        return newFiles;
                    } else {
                        return prevFiles;
                    }
                });
            } catch (error) {
                alert('Failed to download photo');
            } finally {
                setDownloadingPhotos((prev) => prev.filter((path) => path !== photo.path));
            }
        }
        setIsDownloadingAll(false); // Terminer le téléchargement
    };

    const isPhotoInCart = (photo) => {
        return cart.some((element) => element.path === photo.path);
    };

    const isPhotoInDownload = (photo) => {
        return downloadFiles.some((element) => element.path === photo.path);
    }

    const openInBrowser = () => {
        const url = window.location.href;
        window.open(url, '_blank');
    };

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className={styles.photosSection__container} id='photosSection'>
            {isInApp && (
                <div className={styles.notification}>
                    <p className={styles.notification__text}>Pour télécharger des photos, veuillez ouvrir cette page dans votre navigateur web. <br />
                        Appuyez sur les trois points verticaux en haut à droite de l'écran, puis sélectionnez "Ouvrir dans le navigateur"</p>
                </div>
            )}
            <header className={styles.photosSection__header}>
                <h2>Les photos du shooting</h2>
            </header>
            <div className={styles.helpMessages__container}>
                <p className={styles.freePhoto__message}>Retrouvez vos photos téléchargées sur la page <Link href={"/telechargement"}>Téléchargement.</Link></p>
                {freePhotos > 0 && (
                    <motion.button
                        className={styles.cartButton__page}
                        whileHover={{ scale: 1.02, backgroundColor:'var(--primary-700)' }}
                        whileTap={{ scale: 0.9, backgroundColor:'var(--primary-700)'  }}
                        onClick={downloadAllFreePhotos}
                        disabled={downloadingPhotos.length > 0} // Désactive le bouton pendant le téléchargement
                    >
                        {isDownloadingAll ? (
                            <span>Téléchargement en cours...</span>
                        ) : (
                            <>
                                <Image src={downloadWhite} width={22} height={22} alt='icone panier' />
                                Télécharger toutes les photos
                            </>
                        )}
                    </motion.button>
                )}
            </div>
            <ul className={styles.photos__list}>
                {isLoading ? (
                    <Loader />
                ) : (
                    photosList.map((photo, index) => (
                        <li className={styles.photos__container} key={index}
                            onContextMenu={(event) => event.preventDefault()}
                        >
                            <span className={styles.photos__price}>{photo.price}€</span>
                            <div className={styles.photomask}></div>
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
                                onLoad={() => setIsLoading(false)} />
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
                            {photo.price === 0 && (
                                <motion.button
                                    className={isPhotoInDownload(photo) ? `${styles.photos__inCart} ${styles.photos__addToCart}` : styles.photos__addToCart}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleDownload(photo)}
                                    disabled={downloadingPhotos.includes(photo.path)}
                                >
                                    {downloadingPhotos.includes(photo.path) ? (
                                        <span className={styles.downloadSpinner}></span> // Afficher le spinner de chargement
                                    ) : (
                                        <Image
                                            src={downloadIcon}
                                            width={30}
                                            height={30}
                                            alt='Icone télécharger'
                                        />
                                    )}
                                </motion.button>
                            )}
                        </li>
                    ))
                )}
            </ul>
            {cart.length > 0 &&
                <motion.button
                    className={styles.cartButton__page}
                    onClick={() => { router.push('/panier') }}
                    whileHover={{ scale: 1.02, backgroundColor:'var(--primary-700)' }}
                    whileTap={{ scale: 0.9, backgroundColor:'var(--primary-700)'  }}
                >
                    <div className={styles.cartButton__page__icon}>
                        <Image src={cartIcon} width={24} height={24} alt='icone panier' />
                        <span>{cart.length}</span>
                    </div>
                    Voir le panier
                </motion.button>
            }
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
