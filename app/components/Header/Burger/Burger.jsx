'use client'
import React, { useState } from 'react';
import styles from './Burger.module.css';
import Image from 'next/image';
import burger from '../../../../public/icons/burger.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../../Button/Button'; // Assurez-vous que le chemin d'accès est correct
import { useRouter } from 'next/navigation';

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
                width={25} 
                height={25} 
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
                        <nav>
                            <ul className={styles.links__container}>
                                <li onKeyDown={(e) => {handleKeyPressLinks(e, '/')}}>
                                    <Link href={'/'} onClick={toggleMenu}>Accueil</Link>
                                </li>
                                <li onKeyDown={(e) => {handleKeyPressLinks(e, '/siteinternetsurmesure')}}>
                                    <Link href={'/siteinternetsurmesure'} onClick={toggleMenu}>Site internet</Link>
                                </li>
                                <li onKeyDown={(e) => {handleKeyPressLinks(e, '/boutiqueenligne')}}>
                                    <Link href={'/boutiqueenligne'} onClick={toggleMenu}>Boutique en ligne</Link>
                                </li>
                                <li onClick={closeMenu}>
                                    {/* Transmission de la fonction closeMenu en tant que onClick */}
                                    <Button content={'Me contacter'} scrollId={'#contactSection'} />
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
