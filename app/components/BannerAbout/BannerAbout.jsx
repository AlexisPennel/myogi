'use client'
import React from 'react';
import styles from './BannerAbout.module.css';
import { motion } from 'framer-motion';
import aboutBanner from '../../../public/images/bannerAbout.jpg';
import Image from 'next/image';

const BannerAbout = () => {
    return (
        <motion.div 
            initial={{opacity:0.1, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{delay:0.3, ease:'easeInOut'}}
        >
            <Image src={aboutBanner} width={1920} height={2880} alt="Photo de Myogi, photographe animalier et automobile de Rouen" className={styles.about__banner}  tabIndex={0}/>
        </motion.div>
    );
};

export default BannerAbout;