import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import logo from '../../../public/Logo.svg'
import Image from 'next/image';
// import whats from '../../../public/icons/whats.svg';
// import fb from '../../../public/icons/fb.svg';
// import insta from '../../../public/icons/insta.svg';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <Link href={'/'} className={styles.logo__container} aria-label="Retour à l'accueil" >
                <Image src={logo} width={104} height={24} alt='Logo de Myogi, photographe animalier et automobile' />
                {/* <div className={styles.logo__content}>
                    <p className={styles.logo__title}>AP - Développement web</p>
                    <p className={styles.logo__slogan}>Ensemble, inventons votre avenir</p>
                </div> */}
            </Link>
            <nav className={styles.nav__container} aria-label="Navigation principale">
                <ul className={styles.pages__links}>
                    <li>
                        <Link href={'/'}>Accueil</Link>
                    </li>
                    <li>
                        <Link href={'/siteinternetsurmesure'}>Shooting automobile</Link>
                    </li>
                    <li>
                        <Link href={'/boutiqueenligne'}>Shooting animalier</Link>
                    </li>
                    <li>
                        <Link href={'/mentionslegales'}>Portfolio</Link>
                    </li>
                    <li>
                        <Link href={'/mentionslegales'}>Mentions légales</Link>
                    </li>
                    <li>
                        <Link href={'/credits'}>Crédits</Link>
                    </li>
                    <li>
                        <Link href={'/credits'}>Conditions générales de vente</Link>
                    </li>
                </ul>
            </nav>
            {/* <ul className={styles.social__container}>
                <li>
                    <Link href={'https://api.whatsapp.com/send?phone=0649535905'} aria-label="Contacter sur WhatsApp" >
                        <Image src={whats} width={30} height={30} alt="Logo de What's App" />
                    </Link>
                </li>
                <li>
                    <Link href={'https://m.me/AlexisDeveloppementWeb'} aria-label="Contacter sur Facebook" >
                        <Image src={fb} width={30} height={30} alt="Logo de Facebook" />
                    </Link>
                </li>
                <li>
                    <Link href={'https://www.instagram.com/ap.developpement.web/'} aria-label="Visiter le profil Instagram" >
                        <Image src={insta} width={30} height={30} alt="Logo de Instagram" />
                    </Link>
                </li>
            </ul> */}
            <p className={styles.copyright} tabIndex={0}>©2024 Pennel Alexis. Tous droits réservés</p>
        </footer>
    );
};

export default Footer;