'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from './DownloadComponent.module.css';
import Image from 'next/image';
import Loader from '../Loader/Loader';
import downloadIcon from '../../../public/icons/download.svg';
import downloadWhite from '../../../public/icons/downloadWhite.svg';
import { motion } from 'framer-motion';
import { CartContext } from '@/app/CartContext';
import data from '../../../public/galleriesList.json';

const DownloadComponent = () => {
    const blurDataUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c2NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiI+PC9mZUdhdXNzaWFuQmx1cj48L3JlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgwLDAsMCwwLjUpIiBmaWx0ZXI9InVybCgjYikiIC8+PC9zdmc+";
    const { downloadFiles, setDownloadFiles, downloadFilesPaid, setDownloadFilesPaid } = useContext(CartContext);
    const [pageLoading, setPageLoading] = useState(true);
    const [noDownloadItems, setNoDownloadItems] = useState(false);
    const [downloadingPhotos, setDownloadingPhotos] = useState([]);
    const [isDownloadingAll, setIsDownloadingAll] = useState(false);
    const [validPhotos, setValidPhotos] = useState([]);
    const [catActive, setCatActive] = useState(1);

    useEffect(() => {
        if (downloadFiles.length > 0 || downloadFilesPaid.length > 0) {
            setPageLoading(false);
        } else {
            setNoDownloadItems(true);
            setPageLoading(false);
        }
    }, [downloadFiles, downloadFilesPaid]);

    useEffect(() => {
        const transformData = (obj) => {
            let result = [];
            const recursiveHelper = (current) => {
                if (Array.isArray(current)) {
                    current.forEach(item => {
                        if (item.path) {
                            result.push(item.path);
                        }
                    });
                } else if (typeof current === 'object') {
                    for (let key in current) {
                        recursiveHelper(current[key]);
                    }
                }
            };
            recursiveHelper(obj);
            return result;
        };

        let checkPhotos = transformData(data);
        setValidPhotos(checkPhotos);
    }, []);

    useEffect(() => {
        if (validPhotos.length > 0) {
            filterInvalidDownloadFiles(downloadFiles, setDownloadFiles);
            filterInvalidDownloadFiles(downloadFilesPaid, setDownloadFilesPaid);
        }
    }, [validPhotos]);

    const filterInvalidDownloadFiles = (files, setFiles) => {
        if (!files || !Array.isArray(files)) return;
        const validFiles = files.filter(photo => validPhotos.includes(photo.path));
        setFiles(validFiles);
    };

    const handleDownload = async (photo) => {
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
        } catch (error) {
            console.error('Error downloading the photo:', error);
        } finally {
            setDownloadingPhotos((prev) => prev.filter((path) => path !== photo.path));
        }
    };

    const downloadAllFilesSequentially = async (photos) => {
        setIsDownloadingAll(true);
        for (const photo of photos) {
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
            } catch (error) {
                console.error('Error downloading the photo:', error);
            } finally {
                setDownloadingPhotos((prev) => prev.filter((path) => path !== photo.path));
            }
        }
        setIsDownloadingAll(false);
    };

    const downloadAllFiles = () => {
        downloadAllFilesSequentially(downloadFiles);
    };

    const downloadAllFilesPaid = () => {
        downloadAllFilesSequentially(downloadFilesPaid);
    };

    if (pageLoading) {
        return <Loader />;
    }

    return (
        <section>
            <div className={styles.section}>
                <section className={styles.buttons__section}>
                    <h2>Photos</h2>
                    <div className={styles.buttons__section__container}>
                        <motion.button
                            className={catActive === 1 ? `${styles.buttons} ${styles.buttons__active}` : styles.buttons}
                            onClick={() => setCatActive(1)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {downloadFiles.length} Gratuites
                        </motion.button>
                        <motion.button
                            className={catActive === 2 ? `${styles.buttons} ${styles.buttons__active}` : styles.buttons}
                            onClick={() => setCatActive(2)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {downloadFilesPaid.length} Achetées
                        </motion.button>
                    </div>
                </section>
                {catActive === 1 && (
                    <section className={styles.list__section}>
                        <ul className={styles.items__list}>
                            {downloadFiles.length === 0 && <p>Aucune photo à télécharger.</p>}
                            {downloadFiles.map((photo, index) => (
                                <li key={index} className={styles.items} onContextMenu={(event) => event.preventDefault()}>
                                    <div className={styles.items__content}>
                                        <Image
                                            src={photo.path}
                                            width={720}
                                            height={720}
                                            alt='photo'
                                            className={styles.items__photo}
                                            draggable="false"
                                            noindex="true"
                                            placeholder='blur'
                                            blurDataURL={blurDataUrl}
                                            quality={20}
                                        />
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
                                    disabled={downloadingPhotos.length > 0}
                                >
                                    {isDownloadingAll ? (
                                        <span className={styles.downloadSpinner}></span>
                                    ) : (
                                        <>
                                            Tout télécharger
                                            <Image src={downloadWhite} width={30} height={30} alt='Icone télécharger' />
                                        </>
                                    )}
                                </motion.button>
                            )}
                        </ul>
                    </section>
                )}
                {catActive === 2 && (
                    <section className={styles.list__section}>
                        <ul className={styles.items__list}>
                            {downloadFilesPaid.length === 0 && <p>Aucune photo à télécharger.</p>}
                            {downloadFilesPaid.map((photo, index) => (
                                <li key={index} className={styles.items} onContextMenu={(event) => event.preventDefault()}>
                                    <div className={styles.items__content}>
                                        <Image
                                            src={photo.path}
                                            width={720}
                                            height={720}
                                            alt='photo'
                                            className={styles.items__photo}
                                            draggable="false"
                                            noindex="true"
                                            placeholder='blur'
                                            blurDataURL={blurDataUrl}
                                            quality={20}
                                        />
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
                            {downloadFilesPaid.length > 0 && (
                                <motion.button
                                    className={styles.cartButton__page}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={downloadAllFilesPaid}
                                    disabled={downloadingPhotos.length > 0}
                                >
                                    {isDownloadingAll ? (
                                        <span className={styles.downloadSpinner}></span>
                                    ) : (
                                        <>
                                            Tout télécharger
                                            <Image src={downloadWhite} width={30} height={30} alt='Icone télécharger' />
                                        </>
                                    )}
                                </motion.button>
                            )}
                        </ul>
                    </section>
                )}
            </div> 
        </section>
    );
};

export default DownloadComponent;
