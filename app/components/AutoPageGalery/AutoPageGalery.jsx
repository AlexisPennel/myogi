'use client'
import React, { useState } from 'react';
import styles from './AutoPageGalery.module.css';
import Image from 'next/image';
import arrowRight from '../../../public/icons/arrowRight.svg';
import arrowLeft from '../../../public/icons/arrowLeft.svg';
import { AnimatePresence, motion } from 'framer-motion';

const AutoPageGalery = ({ imagesFiles }) => {
    const [imageActive, setImageActive] = useState(null);
    const [images, setImages] = useState(imagesFiles);
    const [animationDirection, setAnimationDirection] = useState(0); // 0 for left, 1 for right

    const handleNavigation = (direction) => {
        setAnimationDirection(direction);
        setImageActive(prev => {
            const newActive = (prev + direction + images.length) % images.length;
            return newActive;
        });
    };

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset > 100 || velocity > 200) {
            handleNavigation(-1);
        } else if (offset < -100 || velocity < -200) {
            handleNavigation(1);
        }
    };

    return (
        <>
            <ul className={styles.list__container}>
                {images.map((img, index) => (
                    <motion.li key={index}
                        onClick={() => setImageActive(index)}
                        layoutId={index.toString()}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}>
                        <Image src={img} width={720} height={720} alt={`Image ${index} de Myogi`} quality={50} />
                    </motion.li>
                ))}
            </ul>
            {imageActive !== null && (
                <div className={styles.galery__wrapper}>
                    <AnimatePresence>
                        <div className={styles.galery__image__wrapper}>
                            <motion.div key={imageActive} className={styles.images__container}
                                initial={{ opacity: 0, x: animationDirection === 1 ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: animationDirection === 1 ? -100 : 100 }}
                                onClick={(e) => e.stopPropagation()}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={handleDragEnd}>
                                <Image
                                    src={images[imageActive]}
                                    className={styles.images}
                                    width={720}
                                    height={720}
                                />
                            </motion.div>
                        </div>
                    </AnimatePresence>
                    <div className={styles.galery__buttons__container}>
                        <Image src={arrowLeft} width={35} height={35} alt='Previous' onClick={(e) => { e.stopPropagation(); handleNavigation(-1); }} className={styles.galery__buttons} />

                        <div className={styles.pagination}>
                            {images.map((_, index) => (
                                <span key={index} className={index == imageActive ? styles.dot__active : styles.dot} onClick={(e) => { e.stopPropagation(); setImageActive(index) }}></span>
                            ))}
                        </div>

                        <Image src={arrowRight} width={35} height={35} alt='Next' onClick={(e) => { e.stopPropagation(); handleNavigation(1); }} className={styles.galery__buttons} />
                    </div>
                    <motion.button className={styles.close__button} onClick={() => setImageActive(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>Fermer</motion.button>
                </div>
            )}
        </>
    );

};

export default AutoPageGalery;
