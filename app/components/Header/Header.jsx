'use client'
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import logo from '../../../public/Logo.svg';
import Link from 'next/link';
// import Burger from './Burger/Burger';
// import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import Burger from './Burger/Burger';
import Button from '../Button/Button';

const Header = () => {
    const pathname = usePathname();

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
                        <Image src={logo} width={104} height={24} alt='Logo de Myogi Photographe automobile et animalier professionnel' className={styles.logo}/>
                    </Link>
                </li>
                <li className={styles.burger} aria-label='Ouvrir le menu de navigation'>
                    <Burger />
                </li>
            </ul>
            <nav className={styles.desktop__links}>
                <ul className={styles.desktop__links__list}>
                    <li>
                        <Link href={'/'} className={pathname === '/' ? styles.link__active : styles.link}>Accueil</Link>
                    </li>
                    <li>
                        <Link href={'/shooting-automobile'} className={pathname === '/shooting-automobile' ? styles.link__active : styles.link}>Shooting automobile</Link>
                    </li>
                    <li>
                        <Link href={'/shooting-animalier'} className={pathname === '/shooting-animalier' ? styles.link__active : styles.link}>Shooting animalier</Link>
                    </li>
                    <li>
                        <Link href={'/portfolio'} className={pathname === '/portfolio' ? styles.link__active : styles.link}>Portfolio</Link>
                    </li>
                    <li>
                        <Button type={'primary'} content={'Me contacter'} scrollId={'#contact'} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;