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

const Header = () => {
    const pathname = usePathname();
    const { cart } = useContext(CartContext);

    const [showCartIcon, setShowCartIcon] = useState(false);

    useEffect(() => {
        // On met à jour l'affichage de l'icône du panier une fois que le composant est monté
        setShowCartIcon(cart != null && Object.keys(cart).length > 0);
    }, [cart]);

    const handleLogoKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Simule un clic sur le lien lors de la pression de la touche Entrée
            window.location.href = '/';
        }
    };


    return (
        <header className={styles.container}>
            <ul className={styles.linksContainer}>
                <li>
                    <Link href={'/'} tabIndex={0} onKeyDown={handleLogoKeyPress} aria-label="Retour à l'accueil">
                        <Image src={logo} width={104} height={24} alt='Logo de Myogi Photographe automobile et animalier professionnel' className={styles.logo} />
                    </Link>
                </li>
                <div className={styles.cartAndBurger__wrapper}>
                    {showCartIcon && (
                        <li>
                            <Link href={'/panier'} className={styles.cart__icon}>
                                <Image src={cartIcon} width={25} height={25} alt='Icone panier' />
                                <p>{cart.length}</p>
                            </Link>
                        </li>
                    )}
                    <li className={styles.burger} aria-label='Ouvrir le menu de navigation'>
                        <Burger />
                    </li>
                </div>
            </ul>
            <nav className={styles.desktop__links}>
                <ul className={styles.desktop__links__list}>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}>
                        <Link href={'/'} className={pathname === '/' ? styles.link__active : styles.link}>Accueil</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}>
                        <Link href={'/shooting-automobile'} className={pathname === '/shooting-automobile' ? styles.link__active : styles.link}>Shooting automobile</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}>
                        <Link href={'/shooting-animalier'} className={pathname === '/shooting-animalier' ? styles.link__active : styles.link}>Shooting animalier</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}>
                        <Link href={'/portfolio'} className={pathname === '/portfolio' ? styles.link__active : styles.link}>Portfolio</Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}>
                        <Button type={'primary'} content={'Me contacter'} scrollId={'#contact'} />
                    </motion.li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;