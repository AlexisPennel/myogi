'use client'
import React, { useState } from 'react';
import styles from './PortfolioPageComponent.module.css';
import { motion } from 'framer-motion';
import help from '../../../public/icons/help.svg';
import Image from 'next/image';
import AutoGalery from './AutoGalery/AutoGalery';
import AnimGalery from './AnimGalery/AnimGalery';


const PortfolioPageComponent = () => {
    const [catActive, setCatActive] = useState(2);

    return (
        <section className={styles.container}>
            <div className={styles.buttons__wrapper}>
                <div className={styles.buttons__container}>
                    <motion.button
                        className={catActive === 1 ? `${styles.buttons} ${styles.buttons__active}` : styles.buttons}
                        onClick={() => { setCatActive(1) }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}>
                        Automobile
                    </motion.button>
                    <motion.button
                        className={catActive === 2 ? `${styles.buttons} ${styles.buttons__active}` : styles.buttons}
                        onClick={() => { setCatActive(2) }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}>
                        Animalier
                    </motion.button>
                </div>
                <div className={styles.helpMessage__container}>
                    <Image src={help} alt="Help" width={15} height={15} />
                    <p>Cliquez pour sélectionner la catégorie</p>
                </div>
            </div>

            {catActive === 1 ?
                <AutoGalery />
                :
                <AnimGalery />

            }
        </section>
    );
};

export default PortfolioPageComponent;