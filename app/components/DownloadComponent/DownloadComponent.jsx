'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from './DownloadComponent.module.css';
import Image from 'next/image';
import Loader from '../Loader/Loader';
import downloadIcon from '../../../public/icons/download.svg';
import { motion } from 'framer-motion';
import { CartContext } from '@/app/CartContext';

const DownloadComponent = ({ params }) => {
    const {downloadFiles} = useContext(CartContext);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        if (downloadFiles.length > 0 ) {
            setPageLoading(false);
        }
    }, [downloadFiles]);


    const handleDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url; // Assignation du chemin complet en tant que nom du fichier
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (pageLoading) {
        return <Loader />;
    }

    return (
        <ul className={styles.items__list}>
            {downloadFiles.map((photo, index) => (
                <li key={index} className={styles.items}>
                    <div className={styles.items__content}>
                        <Image src={photo.path} width={720} height={720} alt='photo' className={styles.items__photo} draggable="false" />
                        <motion.div
                            className={styles.items__download__container}
                            onClick={() => handleDownload(photo.path)}
                            whileTap={{ scale: 0.9 }} // Effet d'interaction sur le bouton
                        >
                            <Image src={downloadIcon} width={30} height={30} alt='icone téléchargement' />
                            <p>Télécharger</p>
                        </motion.div>
                    </div>
                    <div className={styles.line}></div>
                </li>
            ))}
        </ul>
    );
};
 
export default DownloadComponent;
