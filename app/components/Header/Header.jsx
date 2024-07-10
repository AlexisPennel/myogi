'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import logo from '../../../public/Logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Burger from './Burger/Burger';
import Button from '../Button/Button';
import { motion } from 'framer-motion';
import { CartContext } from '@/app/CartContext';
import cartIcon from '../../../public/icons/cart.svg';
import downloadWhite from '../../../public/icons/downloadWhite.svg';

const Header = () => {
    const pathname = usePathname();
    const { cart, downloadFiles, downloadFilesPaid } = useContext(CartContext);
    const [showCartIcon, setShowCartIcon] = useState(false);
    const [showDownloadIcon, setShowDownloadIcon] = useState(false);

    useEffect(() => {
        setShowCartIcon(cart != null && Object.keys(cart).length > 0);
    }, [cart]);

    useEffect(() => {
        if (downloadFiles.length > 0 || downloadFilesPaid.length > 0) {
            setShowDownloadIcon(true);
        }
    }, [downloadFiles])

    const handleLogoKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Simule un clic sur le lien lors de la pression de la touche Entrée
            window.location.href = '/';
        }
    };


    return (
        <header className={styles.container}>
            <nav className={styles.nav}>
                <Link href={'/'} tabIndex={0} onKeyDown={handleLogoKeyPress} aria-label="Retour à l'accueil">
                    <Image src={logo} width={104} height={24} alt='Logo de Romain Martin - Photographe animalier et automobile à Rouen' className={styles.logo} />
                </Link>
                <ul className={styles.nav__list}>
                    {showCartIcon &&
                        <li className={styles.mobile__icons}>
                            <Link href={'/panier'} className={styles.cart__icon}>
                                <Image src={cartIcon} width={25} height={25} alt='Icône page panier' />
                                <p>{cart.length}</p>
                            </Link>
                        </li>
                    }
                    {showDownloadIcon &&
                        <li className={styles.mobile__icons}>
                            <Link href={'/telechargement'} className={styles.cart__icon}>
                                <Image src={downloadWhite} width={25} height={25} alt='Icône de la page téléchargement' />
                            </Link>
                        </li>
                    }
                    <li className={styles.burger} aria-label='Ouvrir le menu de navigation'>
                        <Burger />
                    </li>
                </ul>
                <ul className={styles.nav__list__desktop}>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}
                        tabIndex={-1}>
                        <Link href={'/'} className={pathname === '/' ? styles.link__active : styles.link} tabIndex={0}>Accueil</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}
                        tabIndex={-1}>
                        <Link href={'/shooting-automobile'} className={pathname === '/shooting-automobile' ? styles.link__active : styles.link} tabIndex={0}>Shooting automobile</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}>
                        <Link href={'/shooting-animalier'} className={pathname === '/shooting-animalier' ? styles.link__active : styles.link} tabIndex={0}>Shooting animalier</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}
                        tabIndex={-1}>
                        <Link href={'/portfolio'} className={pathname === '/portfolio' ? styles.link__active : styles.link} tabIndex={0}>Portfolio</Link>
                    </motion.li>
                    {showCartIcon &&
                        <motion.li
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95, y: 1 }}
                            tabIndex={-1}>
                            <Link href={'/panier'} className={styles.cart__icon} tabIndex={0}>
                                <Image src={cartIcon} width={30} height={30} alt='Icône de la page panier' />
                                <p>{cart.length}</p>
                            </Link>
                        </motion.li>
                    }
                    {showDownloadIcon &&
                        <motion.li
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95, y: 1 }}
                            tabIndex={-1}>
                            <Link href={'/telechargement'} tabIndex={0}>
                                <Image src={downloadWhite} width={30} height={30} alt='Icône page téléchargement' />
                            </Link>
                        </motion.li>
                    }
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}
                        tabIndex={-1}>
                        <Button type={'primary'} content={'Me contacter'} scrollId={'#contact'} tabIndex={0} />
                    </motion.li>
                </ul>
            </nav>
            {/* <ul className={styles.linksContainer}>
                <li>
                    <Link href={'/'} tabIndex={0} onKeyDown={handleLogoKeyPress} aria-label="Retour à l'accueil">
                        <Image src={logo} width={104} height={24} alt='Logo de Romain Martin - Photographe animalier et automobile à Rouen' className={styles.logo} />
                    </Link>
                </li>
                <div className={styles.cartAndBurger__wrapper}>
                    {showCartIcon &&
                        <li className={styles.mobile__icons}>
                            <Link href={'/panier'} className={styles.cart__icon}>
                                <Image src={cartIcon} width={25} height={25} alt='Icône page panier' />
                                <p>{cart.length}</p>
                            </Link>
                        </li>
                    }
                    {showDownloadIcon &&
                        <li className={styles.mobile__icons}>
                            <Link href={'/telechargement'} className={styles.cart__icon}>
                                <Image src={downloadWhite} width={25} height={25} alt='Icône de la page téléchargement' />
                            </Link>
                        </li>
                    }
                    <li className={styles.burger} aria-label='Ouvrir le menu de navigation'>
                        <Burger />
                    </li>
                </div>
            </ul>
            </nav>
            <nav className={styles.desktop__links}>
                <ul className={styles.desktop__links__list}>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}
                        tabIndex={-1}>
                        <Link href={'/'} className={pathname === '/' ? styles.link__active : styles.link} tabIndex={0}>Accueil</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}
                        tabIndex={-1}>
                        <Link href={'/shooting-automobile'} className={pathname === '/shooting-automobile' ? styles.link__active : styles.link} tabIndex={0}>Shooting automobile</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}>
                        <Link href={'/shooting-animalier'} className={pathname === '/shooting-animalier' ? styles.link__active : styles.link} tabIndex={0}>Shooting animalier</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}
                        tabIndex={-1}>
                        <Link href={'/portfolio'} className={pathname === '/portfolio' ? styles.link__active : styles.link} tabIndex={0}>Portfolio</Link>
                    </motion.li>
                    {showCartIcon &&
                        <motion.li
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95, y: 1 }}
                            tabIndex={-1}>
                            <Link href={'/panier'} className={styles.cart__icon} tabIndex={0}>
                                <Image src={cartIcon} width={30} height={30} alt='Icône de la page panier' />
                                <p>{cart.length}</p>
                            </Link>
                        </motion.li>
                    }
                    {showDownloadIcon &&
                        <motion.li
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95, y: 1 }}
                            tabIndex={-1}>
                            <Link href={'/telechargement'} tabIndex={0}>
                                <Image src={downloadWhite} width={30} height={30} alt='Icône page téléchargement' />
                            </Link>
                        </motion.li>
                    }
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}
                        tabIndex={-1}>
                        <Button type={'primary'} content={'Me contacter'} scrollId={'#contact'} tabIndex={0}/>
                    </motion.li>
                </ul>
            </nav> */}
        </header>
    );
};

export default Header;