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
                <Image src={photo1} width={1468} height={1116} sizes="(min-width: 1700px) calc(33.38vw - 93px), (min-width: 1200px) calc(33.33vw - 56px), (min-width: 1020px) 289px, (min-width: 780px) calc(27.27vw + 16px), calc(100vw - 32px)" alt={`${altDescriptions[0]}`} noindex tabIndex={0} placeholder='blur' />
            </li>
            <li className={styles.container2}>
                <Image src={photo2} width={1468} height={1116} sizes="(min-width: 1700px) calc(33.38vw - 93px), (min-width: 1200px) calc(33.33vw - 56px), (min-width: 1020px) 289px, (min-width: 780px) calc(27.27vw + 16px), calc(100vw - 32px)" alt={`${altDescriptions[1]}`} noindex tabIndex={0} placeholder='blur' />
            </li>
            <li className={styles.container3}>
                <Image src={photo3} width={1632} height={2392} sizes="(min-width: 1700px) calc(33.38vw - 93px), (min-width: 1200px) calc(33.33vw - 56px), (min-width: 1000px) calc(100vw - 671px), (min-width: 780px) calc(40vw - 83px), calc(100vw - 32px)" alt={`${altDescriptions[2]}`} noindex tabIndex={0} placeholder='blur' />
            </li>
            <li className={styles.container4}>
                <Image src={photo4} width={1468} height={1116} sizes="(min-width: 1700px) calc(33.38vw - 93px), (min-width: 1200px) calc(33.33vw - 56px), (min-width: 1020px) 289px, (min-width: 780px) calc(27.27vw + 16px), calc(100vw - 32px)" alt={`${altDescriptions[3]}`} noindex tabIndex={0} placeholder='blur' />
            </li>
            <li className={styles.container5}>
                <Image src={photo5} width={1468} height={1116} sizes="(min-width: 1700px) calc(33.38vw - 93px), (min-width: 1200px) calc(33.33vw - 56px), (min-width: 1020px) 289px, (min-width: 780px) calc(27.27vw + 16px), calc(100vw - 32px)" alt={`${altDescriptions[4]}`} noindex tabIndex={0} placeholder='blur' />
            </li>
        </ul>
    );
};

export default PortfolioHome;