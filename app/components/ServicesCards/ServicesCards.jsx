'use client'
import React, { useRef } from 'react';
import styles from './ServicesCards.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import shootingAuto from '../../../public/images/shootingAutoCard-min.webp';
import shootingAnimalier from '../../../public/images/shootingAnimalierCard-min.webp';
import Button from '../Button/Button';


const ServicesCards = () => {
    const ref = useRef(null);
    const ref2 = useRef(null);

    // Scroll progress for first card
    const { scrollYProgress: scrollYProgressOne } = useScroll({
        target: ref,
        offset: ["start end", 'end end'],
    });

    // Scroll progress for second card
    const { scrollYProgress: scrollYProgressTwo } = useScroll({
        target: ref2,
        offset: ["start end", 'end end'],
    });

    // Translations
    const translateXOne = useTransform(scrollYProgressOne, [0, 1], ["100px", "0px"]);
    const translateXTwo = useTransform(scrollYProgressTwo, [0, 1], ["-100px", "0px"]);

    // Opacities
    const opacityOne = useTransform(scrollYProgressOne, [0, 1], [0, 1]);
    const opacityTwo = useTransform(scrollYProgressTwo, [0, 1], [0, 1]);

    return (
        <ul className={styles.list__container}>
            <motion.li
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.list__cards}
                tabIndex={0}
                aria-labelledby='autoTitle'
                style={{ translateX: translateXOne, opacity: opacityOne }}
                ref={ref} >
                <div className={styles.cards__imageContainer}>
                    <span className={styles.imageContainer__number}>01</span>
                    <Image src={shootingAuto} width={1280} height={720} alt="Photo d'une porshe Cayman GTS grise" className={styles.imageContainer__image} placeholder='blur' sizes='(min-width:768px) 35vw, (min-width:1200px) 25vw, (min-width:1700px) 20vw, 100vw' tabIndex={0} noindex="true" draggable="false" onContextMenu={(event) => event.preventDefault()} />
                </div>
                <div className={styles.responsive__wrapper}>
                    <div className={styles.cards__content}>
                        <h3 tabIndex={0} id='autoTitle'>Shooting Automobile</h3>
                        <p tabIndex={0}>Immortalisez les moments magiques avec votre compagnon. Capturez l'essence et la personnalité de vos animaux de compagnie à travers des photos qui racontent leur histoire. Laissez-moi révéler le lien unique qui vous unit à eux, dans des clichés empreints d'émotion et de beauté naturelle.</p>
                    </div>
                    <div className={styles.cards__buttonContainer}>
                        <Button type={'primary'} content={'En savoir plus'} link={'/shooting-automobile'} />
                    </div>
                </div>
            </motion.li>
            <motion.li
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.list__cards}
                aria-labelledby='animauxTitle'
                tabIndex={0}
                ref={ref2}
                style={{ translateX: translateXTwo, opacity: opacityTwo }}>
                <div className={styles.cards__imageContainer}>
                    <span className={styles.imageContainer__number}>02</span>
                    <Image src={shootingAnimalier} width={1280} height={720} alt="Photo d'un chien Akita Inu blanc'" className={styles.imageContainer__image} placeholder='blur' sizes='(min-width:768px) 35vw, (min-width:1200px) 25vw, (min-width:1700px) 20vw, 100vw' tabIndex={0} noindex="true" draggable="false" onContextMenu={(event) => event.preventDefault()} />
                </div>
                <div className={styles.responsive__wrapper}>
                    <div className={styles.cards__content}>
                        <h3 tabIndex={0} id='animauxTitle'>Shooting Animalier</h3>
                        <p tabIndex={0}>Immortalisez les moments magiques avec votre compagnon. Capturez l'essence et la personnalité de vos animaux de compagnie à travers des photos qui racontent leur histoire. Laissez-moi révéler le lien unique qui vous unit à eux, dans des clichés empreints d'émotion et de beauté naturelle.</p>
                    </div>
                    <div className={styles.cards__buttonContainer}>
                        <Button type={'primary'} content={'En savoir plus'} link={'/shooting-animalier'} />
                    </div>
                </div>
            </motion.li>
        </ul>
    );
};

export default ServicesCards;