'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from './DownloadComponent.module.css';
import Image from 'next/image';
import Loader from '../Loader/Loader';
import downloadIcon from '../../../public/icons/download.svg';
import downloadWhite from '../../../public/icons/downloadWhite.svg';
import { motion } from 'framer-motion';
import { CartContext } from '@/app/CartContext';
import { useRouter } from 'next/navigation';
import Button from '../Button/Button';

const DownloadComponent = ({ params }) => {
    const router = useRouter();
    const blurDataUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c2NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiI+PC9mZUdhdXNzaWFuQmx1cj48L3JlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgwLDAsMCwwLjUpIiBmaWx0ZXI9InVybCgjYikiIC8+PC9zdmc+";
    const { downloadFiles } = useContext(CartContext);
    const [pageLoading, setPageLoading] = useState(true);
    const [noDownloadItems, setNoDownloadItems] = useState(false);
    const [downloadingPhotos, setDownloadingPhotos] = useState([]);
    const [isDownloadingAll, setIsDownloadingAll] = useState(false);

    useEffect(() => {
        if (downloadFiles.length > 0) {
            setPageLoading(false);
        } else {
            setNoDownloadItems(true);
            setPageLoading(false);
        }
    }, [downloadFiles]);

    useEffect(() => {
        console.log(downloadingPhotos);
    }, [downloadingPhotos])


    const handleDownload = (photo) => {
        console.log(photo.path)
        setDownloadingPhotos((prev) => [...prev, photo.path]);
        const link = document.createElement('a');
        link.href = photo.path;
        link.download = photo.path;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            setDownloadingPhotos((prev) => prev.filter((path) => path !== photo.path));
        }, 2000);
    };

    const downloadAllFiles = () => {
        setIsDownloadingAll(true);
        downloadFiles.forEach(photo => {
            setDownloadingPhotos((prev) => [...prev, photo.path]);
            const link = document.createElement('a');
            link.href = photo.path;
            link.download = photo.path;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => {
                setDownloadingPhotos((prev) => prev.filter((path) => path !== photo.path));
                setIsDownloadingAll(false);
            }, 2000);
        });
    };

    if (pageLoading) {
        return <Loader />;
    }

    return (
        <ul className={styles.items__list}>
            {noDownloadItems &&
                <div className={styles.warning__message}>
                    <p>Aucune photo à télécharger.</p>
                    <Button content={"Retour page d'accueil"} link={'/'} type={'primary'} />
                </div>
            }
            {downloadFiles.map((photo, index) => (
                <li key={index} className={styles.items} onContextMenu={(event) => event.preventDefault()}>
                    <div className={styles.items__content} >
                        <Image
                            src={photo.path}
                            width={720}
                            height={720}
                            alt='photo' className={styles.items__photo}
                            draggable="false"
                            noindex="true"
                            placeholder='blur'
                            blurDataURL={blurDataUrl}
                            quality={30} />
                        <motion.div
                            className={styles.items__download__container}
                            onClick={() => handleDownload(photo)}
                            whileTap={{ scale: 0.9 }}
                            disabled={downloadingPhotos.includes(photo.path)}
                        >
                            {downloadingPhotos.includes(photo.path) ? (
                                <span className={styles.downloadSpinner}></span>
                            ) : (
                                <Image
                                    src={downloadIcon}
                                    width={30}
                                    height={30}
                                    alt='Icone télécharger'
                                />
                            )}
                        </motion.div>
                    </div>
                    <div className={styles.line}></div>
                </li>
            ))}
            {downloadFiles.length > 0 && (
                <motion.button
                    className={styles.cartButton__page}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={downloadAllFiles}
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
        </ul>
    );
};

export default DownloadComponent;
