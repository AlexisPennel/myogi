'use client'
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import logo from '../../../public/Logo.svg';
import Link from 'next/link';
// import Burger from './Burger/Burger';
// import Button from '../Button/Button';
import { usePathname } from 'next/navigation';

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
                    {/* <Burger /> */}
                </li>
            </ul>
            <nav className={styles.desktop__links}>
                <ul className={styles.desktop__links__list}>
                    <li>
                        <Link href={'/'} className={pathname === '/' ? styles.link__active : styles.link}>Accueil</Link>
                    </li>
                    <li>
                        <Link href={'/siteinternetsurmesure'} className={pathname === '/siteinternetsurmesure' ? styles.link__active : styles.link}>Site internet</Link>
                    </li>
                    <li>
                        <Link href={'/boutiqueenligne'} className={pathname === '/boutiqueenligne' ? styles.link__active : styles.link}>Boutique en ligne</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.contactButton__container}>
                {/* <Button content={'Me contacter'} scrollId={'#contactSection'} /> */}
            </div>
        </header>
    );
};

export default Header;