'use client'
import React from 'react';
import styles from './ServicesCards.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import shootingAuto from '../../../public/images/shootingAutoCard.jpg';
import shootingAnimalier from '../../../public/images/shootingAnimalierCard.jpg';
import Button from '../Button/Button';

const ServicesCards = () => {
    return (
        <ul className={styles.list__container}>
            <motion.li
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, ease: 'easeInOut' }}
                className={styles.list__cards} 
                tabIndex={0}
                aria-labelledby='autoTitle' >
                <div className={styles.cards__imageContainer}>
                    <span className={styles.imageContainer__number}>01</span>
                    <Image src={shootingAuto} width={4830} height={2717} alt="Photo du photographe Myogi d'une porshe Cayman" className={styles.imageContainer__image} placeholder='blur' sizes='100vw' tabIndex={0}/>
                </div>
                <div className={styles.cards__content}>
                    <h3 tabIndex={0} id='autoTitle'>Shooting Automobile</h3>
                    <p tabIndex={0}>Immortalisez les moments magiques avec votre compagnon. Capturez l'essence et la personnalité de vos animaux de compagnie à travers des photos qui racontent leur histoire. Laissez-moi révéler le lien unique qui vous unit à eux, dans des clichés empreints d'émotion et de beauté naturelle.</p>
                </div>
                <div className={styles.cards__buttonContainer}>
                    <Button type={'primary'} content={'En savoir plus'} link={'/shootingautomobile'} />
                </div>
            </motion.li>
            <motion.li
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, ease: 'easeInOut' }}
                className={styles.list__cards}
                aria-labelledby='animauxTitle'
                tabIndex={0}>
                <div className={styles.cards__imageContainer}>
                    <span className={styles.imageContainer__number}>02</span>
                    <Image src={shootingAnimalier} width={4830} height={2717} alt="Photo de Myogi d'une porshe Cayman" className={styles.imageContainer__image} placeholder='blur' sizes='100vw' tabIndex={0} />
                </div>
                <div className={styles.cards__content}>
                    <h3 tabIndex={0} id='animauxTitle'>Shooting Animalier</h3>
                    <p tabIndex={0}>Immortalisez les moments magiques avec votre compagnon. Capturez l'essence et la personnalité de vos animaux de compagnie à travers des photos qui racontent leur histoire. Laissez-moi révéler le lien unique qui vous unit à eux, dans des clichés empreints d'émotion et de beauté naturelle.</p>
                </div>
                <div className={styles.cards__buttonContainer}>
                    <Button type={'primary'} content={'En savoir plus'} link={'/shootinganimalier'} />
                </div>
            </motion.li>
        </ul>
    );
};

export default ServicesCards;