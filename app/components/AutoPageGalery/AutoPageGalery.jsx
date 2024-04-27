'use client'
import React, { useEffect, useState } from 'react';
import styles from './AutoPageGalery.module.css';
import Image from 'next/image';
import arrowRight from '../../../public/icons/arrowRight.svg';
import arrowLeft from '../../../public/icons/arrowLeft.svg';
import { AnimatePresence, motion } from 'framer-motion';

import photoSmall1 from '../../../public/images/ShootingAuto/small/01-min.webp';
import photoSmall2 from '../../../public/images/ShootingAuto/small/02-min.webp';
import photoSmall3 from '../../../public/images/ShootingAuto/small/03-min.webp';
import photoSmall4 from '../../../public/images/ShootingAuto/small/04-min.webp';
import photoSmall5 from '../../../public/images/ShootingAuto/small/05-min.webp';
import photoSmall6 from '../../../public/images/ShootingAuto/small/06-min.webp';
import photoSmall7 from '../../../public/images/ShootingAuto/small/07-min.webp';
import photoSmall8 from '../../../public/images/ShootingAuto/small/08-min.webp';


import photo1 from '../../../public/images/ShootingAuto/01-min.webp';
import photo2 from '../../../public/images/ShootingAuto/02-min.webp';
import photo3 from '../../../public/images/ShootingAuto/03-min.webp';
import photo4 from '../../../public/images/ShootingAuto/04-min.webp';
import photo5 from '../../../public/images/ShootingAuto/05-min.webp';
import photo6 from '../../../public/images/ShootingAuto/06-min.webp';
import photo7 from '../../../public/images/ShootingAuto/07-min.webp';
import photo8 from '../../../public/images/ShootingAuto/08-min.webp';


const AutoPageGalery = () => {
    const [animationDirection, setAnimationDirection] = useState(0);
    const [imageActive, setImageActive] = useState(null);
    
    const imagesSmall = [
        photoSmall1,
        photoSmall2,
        photoSmall3,
        photoSmall4,
        photoSmall5,
        photoSmall6,
        photoSmall7,
        photoSmall8
    ]

    const images = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8
    ];


    const altDescriptions = [
        "Photo d'une Bmw M4",
        "Photo de",
        "Photo de",
        "Photo de",
        "Photo de",
        "Photo de",
        "Photo de",
        "Photo de",
    ]

    const handleKeyDown = (event, index) => {
        if (event.key === "ArrowRight") {
            handleNavigation(1);
        } else if (event.key === "ArrowLeft") {
            handleNavigation(-1);
        }

        if (event.key === 'Enter') {
            if (index) {
                setImageActive(index);
            } else {
                setImageActive(0);
            }
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
                {imagesSmall.map((img, index) => (
                    <motion.li key={index}
                        onClick={() => setImageActive(index)}
                        layoutId={index.toString()}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        tabIndex={0}
                        onKeyDown={(event) => { handleKeyDown(event, index) }}>
                        <Image src={img} width={1172} height={1172} alt={`${altDescriptions[index]}`} sizes="(min-width: 1700px) calc(25vw - 88px), (min-width: 1200px) calc(25vw - 42px), (min-width: 780px) calc(25vw - 27px), calc(50vw - 24px)" placeholder='blur' noindex="true" onContextMenu={(event) => event.preventDefault()} draggable="false"/>
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
                                <p className={styles.loadingMessage}>Chargement en cours,<br/> veuillez patienter.</p>
                                <Image
                                    src={images[imageActive]}
                                    className={styles.images}
                                    width={720}
                                    height={720}
                                    alt={`${altDescriptions[imageActive]}`}
                                    sizes='(min-width: 1200px) 30vw, 100vw'
                                    placeholder="blur"
                                    draggable="false"
                                />
                            </motion.div>
                        </div>
                    </AnimatePresence>
                    <div className={styles.galery__buttons__container}>
                        <Image src={arrowLeft} width={35} height={35} alt='Previous' role="button" tabIndex={0} onClick={(e) => { e.stopPropagation(); handleNavigation(-1); }} className={styles.galery__buttons} />

                        <div className={styles.pagination}>
                            {images.map((_, index) => (
                                <span key={index} className={index == imageActive ? styles.dot__active : styles.dot} onClick={(e) => { e.stopPropagation(); setImageActive(index) }}></span>
                            ))}
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

export default AutoPageGalery;
