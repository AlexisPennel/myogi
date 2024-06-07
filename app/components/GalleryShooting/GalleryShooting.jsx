'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './GalleryShooting.module.css';
import Image from 'next/image';
import arrowRight from '../../../public/icons/arrowRight.svg';
import arrowLeft from '../../../public/icons/arrowLeft.svg';

const GalleryShooting = ({ images, imageActive }) => {
    const [image, setImage] = useState(imageActive);

    return (
        <div className={styles.container}>
            <AnimatePresence>
                <motion.img
                    key={image[image]}
                    src={image[image]}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    className={styles.images}
                />
            </AnimatePresence>
            <div className={styles.buttons}>
                <div className={styles.next__button} onClick={() => {setImage(image - 1)}}>
                    <Image src={arrowLeft} width={50} height={50} alt='Fleche Gauche' />
                </div>
                <div>

                </div>
                <div className={styles.next__button} onClick={() => {setImage(image + 1)}}>
                    <Image src={arrowRight} width={50} height={50} alt='Fleche droite' />
                </div>
            </div>
        </div>
    );
};

export default GalleryShooting;