'use client'
import React from 'react';
import styles from './PortfolioHome.module.css';
import Image from 'next/image';
import photo1 from '../../../public/images/PortfolioHome/01.webp';
import photo2 from '../../../public/images/PortfolioHome/02.webp';
import photo3 from '../../../public/images/PortfolioHome/03.webp';
import photo4 from '../../../public/images/PortfolioHome/04.webp';
import photo5 from '../../../public/images/PortfolioHome/05.webp';


const PortfolioHome = () => {
    const altDescriptions = [
        "Photo d'une Nissan GTR",
        "Photo d'une Nissan GTR",
        "Photo d'une Nissan GTR",
        "Photo d'une Nissan GTR",
        "Photo d'une Nissan GTR"
    ]

    return (
        <ul className={styles.container}>
            <li className={styles.container1}>
                <Image src={photo1} width={1280} height={720} sizes="(min-width: 1700px) 28vw, (min-width: 1200px) 29vw, (min-width: 768px) 28vw, 100vw" alt={`${altDescriptions[0]}`} noindex="true" tabIndex={0} placeholder='blur' draggable="false" onContextMenu={(event) => event.preventDefault()}/>
            </li>
            <li className={styles.container2}>
                <Image src={photo2} width={1080} height={720} sizes="(min-width: 1700px) 28vw, (min-width: 1200px) 29vw, (min-width: 768px) 28vw, 100vw" alt={`${altDescriptions[1]}`} noindex="true" tabIndex={0} placeholder='blur' draggable="false" onContextMenu={(event) => event.preventDefault()}/>
            </li>
            <li className={styles.container3}>
                <Image src={photo3} width={720} height={1080} sizes="(min-width: 768px) 29vw, 100vw" alt={`${altDescriptions[2]}`} noindex="true" tabIndex={0} placeholder='blur' draggable="false" onContextMenu={(event) => event.preventDefault()}/>
            </li>
            <li className={styles.container4}>
                <Image src={photo4} width={720} height={1280} sizes="(min-width: 1700px) 28vw, (min-width: 1200px) 29vw, (min-width: 768px) 28vw, 100vw" alt={`${altDescriptions[3]}`} noindex="true" tabIndex={0} placeholder='blur' draggable="false" onContextMenu={(event) => event.preventDefault()}/>
            </li>
            <li className={styles.container5}>
                <Image src={photo5} width={1080} height={864} sizes="(min-width: 1700px) 28vw, (min-width: 1200px) 29vw, (min-width: 768px) 28vw, 100vw" alt={`${altDescriptions[4]}`} noindex="true" tabIndex={0} placeholder='blur' draggable="false" onContextMenu={(event) => event.preventDefault()}/>
            </li>
        </ul>
    );
};

export default PortfolioHome;