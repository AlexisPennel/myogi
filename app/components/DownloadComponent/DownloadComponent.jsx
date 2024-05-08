'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from './DownloadComponent.module.css';
import Image from 'next/image';
import Loader from '../Loader/Loader';
import downloadIcon from '../../../public/icons/download.svg';
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

    useEffect(() => {
        if (downloadFiles.length > 0) {
            setPageLoading(false);
        } else {
            setNoDownloadItems(true);
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
                            quality={50}/>
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
