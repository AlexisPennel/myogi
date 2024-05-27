'use client'
import React from 'react';
import styles from './ProcessCards.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import processCard1 from '../../../public/images/processCard1-min.webp';
import processCard2 from '../../../public/images/processCard2-min.webp';
import processCard3 from '../../../public/images/processCard3-min.webp';


const ProcessCards = () => {
    return (
        <ul className={styles.list__container}>
            <motion.li
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, ease: 'easeInOut' }}
                className={styles.list__cards}
                tabIndex={0}
                aria-labelledby='lieuTitle' >
                <div className={styles.cards__imageContainer}>
                    <span className={styles.imageContainer__number}>01</span>
                    <Image src={processCard1} width={1632} height={1020} sizes="(min-width: 1700px) 20vw, (min-width: 1200px) 25vw, (min-width: 780px) 35vw, calc(100vw - 32px)" alt="Photo d'un telephone portable dans une main" className={styles.imageContainer__image} placeholder='blur' tabIndex={0} />
                </div>
                <div className={styles.cards__content}>
                    <h3 tabIndex={0} id='lieuTitle'>Choix du lieu idéal</h3>
                    <p tabIndex={0}>
                        La première étape essentielle de notre shooting photo est de choisir le décor idéal, répondant à vos attentes et mettant en valeur vos photographies de manière exceptionnelle. </p>
                </div>
            </motion.li>
            <motion.li
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, ease: 'easeInOut' }}
                className={styles.list__cards}
                aria-labelledby='shootingTitle'
                tabIndex={0}>
                <div className={styles.cards__imageContainer}>
                    <span className={styles.imageContainer__number}>02</span>
                    <Image src={processCard2} width={1632} height={1020}  alt="Photo d'un objectif d'appareil photo" className={styles.imageContainer__image} placeholder='blur' sizes="(min-width: 1700px) 20vw, (min-width: 1200px) 25vw, (min-width: 780px) 35vw, calc(100vw - 32px)" tabIndex={0} />
                </div>
                <div className={styles.cards__content}>
                    <h3 tabIndex={0} id='shootingTitle'>Le Shooting</h3>
                    <p tabIndex={0}>Une fois le lieu idéal sélectionné, nous passons à l'action avec le shooting proprement dit. Cette étape est l'occasion de capturer la magie, grâce à un mélange d'expertise technique et de créativité artistique.</p>
                </div>
            </motion.li>
            <motion.li
                initial={{ opacity: 0.1 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, ease: 'easeInOut' }}
                className={styles.list__cards}
                aria-labelledby='livraisonTitle'
                tabIndex={0}>
                <div className={styles.cards__imageContainer}>
                    <span className={styles.imageContainer__number}>03</span>
                    <Image src={processCard3} width={1632} height={1020} alt="Photos sur papier sur une table" className={styles.imageContainer__image} placeholder='blur' sizes="(min-width: 1700px) 20vw, (min-width: 1200px) 25vw, (min-width: 780px) 35vw, calc(100vw - 32px)" tabIndex={0} />
                </div>
                <div className={styles.cards__content}>
                    <h3 tabIndex={0} id='livraisonTitle'>la Livraison </h3>
                    <p tabIndex={0}>Après le shooting, je procède à une sélection rigoureuse et à un post-traitement professionnel pour que chaque image atteigne la perfection.</p>
                </div>
            </motion.li>
        </ul>
    );
};

export default ProcessCards;