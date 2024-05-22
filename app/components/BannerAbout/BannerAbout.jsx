'use client'
import React, { useRef } from 'react';
import styles from './BannerAbout.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutBanner from '../../../public/images/bannerAbout.webp';
import Image from 'next/image';

const BannerAbout = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const translateX = useTransform(
        scrollYProgress,
        // Map x from these values:
        [0, 1],
        // Into these values:
        ["-10%", "0%"]
    );

    return (
        <motion.div
            onContextMenu={(event) => event.preventDefault()}
            ref={ref}>
            <motion.div style={{ translateX: translateX, position: 'relative' }}>
                <Image src={aboutBanner} width={1080} height={1080} alt="Photo personnelle du photographe Romain Martin" className={styles.about__banner} tabIndex={0} noindex="true" draggable="false" />
            </motion.div>
        </motion.div>
    );
};

export default BannerAbout;