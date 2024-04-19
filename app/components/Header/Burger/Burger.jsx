'use client'
import React, { useState } from 'react';
import styles from './Burger.module.css';
import Image from 'next/image';
import burger from '../../../../public/icons/burger.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../../Button/Button'; // Assurez-vous que le chemin d'accès est correct
import { useRouter } from 'next/navigation';
import messengerWhite from '../../../../public/icons/messengerWhite.svg';
import whatsWhite from '../../../../public/icons/whatsWhite.svg'
import instagramWhite from '../../../../public/icons/instagramWhite.svg'


const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Renommage pour plus de clarté
    const closeMenu = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') toggleMenu();
    };

    const handleKeyPressLinks = (e, link) => {
        if (e.key === 'Enter') {
            toggleMenu();
            router.push(link);
        }
    }

    return (
        <div 
            tabIndex={0} 
            aria-label='Menu de navigation' 
            onKeyDown={handleKeyPress} // Gère l'ouverture/fermeture avec la touche Entrée
        >
            <Image 
                src={burger}
                alt='menu de navigation' 
                width={35} 
                height={35} 
                onClick={toggleMenu}
                className={styles.burger}
            />
            {isOpen && (
                <div className={styles.menu__wrapper} onClick={closeMenu}>
                    <motion.div className={styles.menu__container} onClick={e => e.stopPropagation()}
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        exit={{x:500}}
                        transition={{ease:'easeInOut'}}>
                            <div className={styles.social__container}>
                                <Link href={'#'}>
                                    <Image src={messengerWhite} width={25} height={25} alt='messenger' />
                                </Link>
                                <Link href={'#'}>
                                    <Image src={whatsWhite} width={25} height={25} alt="what's app" />
                                </Link>
                                <Link href={'#'}>
                                    <Image src={instagramWhite} width={25} height={25} alt='instagram' />
                                </Link> 
                            </div>
                        <nav>
                            <ul className={styles.links__container}>
                                <li onKeyDown={(e) => {handleKeyPressLinks(e, '/')}}>
                                    <Link href={'/'} onClick={toggleMenu}>Accueil</Link>
                                </li>
                                <li onKeyDown={(e) => {handleKeyPressLinks(e, '/shooting-automobile')}}>
                                    <Link href={'/shooting-automobile'} onClick={toggleMenu}>Shooting automobile</Link>
                                </li>
                                <li onKeyDown={(e) => {handleKeyPressLinks(e, '/shooting-animalier')}}>
                                    <Link href={'/shooting-animalier'} onClick={toggleMenu}>Shooting animalier</Link>
                                </li>
                                <li onKeyDown={(e) => {handleKeyPressLinks(e, '/portfolio')}}>
                                    <Link href={'/portfolio'} onClick={toggleMenu}>Portfolio</Link>
                                </li>
                                <li onClick={closeMenu}>
                                    <Button type={'primary'} size={'large'}content={'Contact'} scrollId={'#contact'} />
                                </li>
                            </ul>
                        </nav>
                        <button onClick={closeMenu} tabIndex={0} aria-label='Fermer le menu'>Fermer</button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Burger;
