import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import logo from '../../../public/Logo.svg'
import logo2 from '../../../public/Logo2.svg'
import Image from 'next/image';
import mail from '../../../public/icons/mail.svg';
import insta from '../../../public/icons/instagramWhite.svg';
import logoAP from '../../../public/icons/logoAP.svg';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.responsive__wrapper}>
                <div className={styles.logoAndSocial__wrapper}>
                    <Link href={'/'} className={styles.logo__container} aria-label="Retour à l'accueil" >
                        <Image src={logo} width={104} height={24} alt='Logo de Myogi, photographe animalier et automobile' />
                    </Link>
                    <Link href={'/'} className={styles.logo__container__desk} aria-label="Retour à l'accueil" >
                        <Image src={logo2} width={57} height={214} alt='Logo Vertical de Myogi, photographe animalier et automobile' />
                    </Link>
                    <ul className={styles.social__container}>
                        <li>
                            <Link href={'https://www.instagram.com/myogi.jpg/'} aria-label="Visiter le profil Instagram" >
                                <Image src={insta} width={25} height={25} alt="Logo de Instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link href={"mailto:myogi.photo@gmail.com"} aria-label="Contactez-moi par email" >
                                <Image src={mail} width={25} height={25} alt="Icone email" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <nav className={styles.nav__container} aria-label="Navigation pied de page">
                    <ul className={styles.pages__links}>
                        <li>
                            <Link href={'/'} className={styles.links}>Accueil</Link>
                        </li>
                        <li>
                            <Link href={'/shooting-automobile'} className={styles.links}>Shooting automobile</Link>
                        </li>
                        <li>
                            <Link href={'/shooting-animalier'} className={styles.links}>Shooting animalier</Link>
                        </li>
                        <li>
                            <Link href={'/cartes-cadeaux'} className={styles.links}>Cartes cadeaux</Link>
                        </li>
                        <li>
                            <Link href={'/portfolio'} className={styles.links}>Portfolio</Link>
                        </li>
                        <li>
                            <Link href={'/mentions-legales'} className={styles.legal__links}>Mentions légales</Link>
                        </li>
                        <li>
                            <Link href={'/conditions-generales-de-vente'} className={styles.legal__links}>Conditions générales de vente</Link>
                        </li>
                        <li>
                            <Link href={'/credits'} className={styles.legal__links}>Crédits</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Link href={'https://www.alexispennel.fr/'} className={styles.promo__container}>
                <Image src={logoAP} width={25} height={25} alt='Logo de Alexis Pennel, Développeur web' />
                <p>Site développé par Alexis Pennel</p>
            </Link>
        </footer>
    );
};

export default Footer;