'use client'
import React, { useEffect, useState } from 'react';
import styles from './AutoGalery.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import arrowRight from '../../../../public/icons/arrowRight.svg';
import arrowLeft from '../../../../public/icons/arrowLeft.svg';

import photo1 from '../../../../public/images/Portfolio/Auto/01-min.webp';
import photo2 from '../../../../public/images/Portfolio/Auto/02-min.webp';
import photo3 from '../../../../public/images/Portfolio/Auto/03-min.webp';
import photo4 from '../../../../public/images/Portfolio/Auto/04-min.webp';
import photo5 from '../../../../public/images/Portfolio/Auto/05-min.webp';
import photo6 from '../../../../public/images/Portfolio/Auto/06-min.webp';
import photo7 from '../../../../public/images/Portfolio/Auto/07-min.webp';
import photo8 from '../../../../public/images/Portfolio/Auto/08-min.webp';
import photo9 from '../../../../public/images/Portfolio/Auto/09-min.webp';
import photo10 from '../../../../public/images/Portfolio/Auto/10-min.webp';
import photo11 from '../../../../public/images/Portfolio/Auto/11-min.webp';
import photo12 from '../../../../public/images/Portfolio/Auto/12-min.webp';
import photo13 from '../../../../public/images/Portfolio/Auto/13-min.webp';
import Image from 'next/image';


const AutoGalery = () => {
    const [animationDirection, setAnimationDirection] = useState(0);
    const [imageActive, setImageActive] = useState(null)

    const imagesAuto = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8,
        photo9,
        photo10,
        photo11,
        photo12,
        photo13
    ]

    const altDescriptions = [
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
        "saasas",
    ]


    const handleKeyDown = (event, index) => {
        if (event.key === "ArrowRight") {
            handleNavigation(1);
        } else if (event.key === "ArrowLeft") {
            handleNavigation(-1);
        }

        if (event.key === 'Enter') {
            setImageActive(index);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleNavigation = (direction) => {
        setAnimationDirection(direction);
        setImageActive(prev => {
            const newActive = (prev + direction + imagesAuto.length) % imagesAuto.length;
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
            <ul className={styles.images__list}>
                {imagesAuto.map((img, index) => (
                    <motion.li 
                        key={index}
                        layoutId={index.toString()}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        tabIndex={0}
                        className={`${styles['imageItem-' + index]}`}
                        onContextMenu={(event) => event.preventDefault()}
                        >
                        <Image 
                            src={img} 
                            width={2392}
                            height={1448} 
                            alt={`${altDescriptions[index]}`}
                            className={styles.images__small} 
                            sizes='100vw' 
                            noindex="true" 
                            placeholder='blur' 
                            onClick={() => { setImageActive(index) }}
                            onKeyDown={(event) => { handleKeyDown(event, index) }} 
                            draggable="false"/>
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
                                onDragEnd={handleDragEnd} 
                                onContextMenu={(event) => event.preventDefault()}>
                                <p className={styles.loadingMessage}>Chargement en cours,<br /> veuillez patienter.</p>
                                <Image
                                    src={imagesAuto[imageActive]}
                                    className={styles.images}
                                    width={720}
                                    height={720}
                                    alt={`${altDescriptions[imageActive]}`}
                                    sizes='(min-width: 1200px) 30vw, 100vw'
                                    placeholder='blur'
                                    draggable="false"
                                />
                            </motion.div>
                        </div>
                    </AnimatePresence>
                    <div className={styles.galery__buttons__container}>
                        <Image src={arrowLeft} width={35} height={35} alt='Previous' role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); handleNavigation(-1); }} className={styles.galery__buttons} />

                        <div className={styles.pagination}>
                                    <p>{`${imageActive + 1}/${imagesAuto.length}`}</p>
                                </div>

                        <Image src={arrowRight} width={35} height={35} alt='Next' role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); handleNavigation(1); }} className={styles.galery__buttons} />
                    </div>
                    <motion.button className={styles.close__button} onClick={() => setImageActive(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        tabIndex={0}>Fermer</motion.button>
                </div>
            )}
        </>
    );
};

export default AutoGalery;