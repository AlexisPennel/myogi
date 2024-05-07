import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../components/Button/Button';
import bannerPortfolio from '../../public/images/bannerPortfolio-min.webp';
import PortfolioPageComponent from '../components/PortfolioPageComponent/PortfolioPageComponent';
import Form from '../components/Form/Form';
import Link from 'next/link';
import Error from '../error';

export const metadata = {
    title: 'Portfolio - Romain Martin - Photographe à Rouen',
    description: "Découvrez mes dernières photographies animalières et automobiles ! Réservez votre shooting pour immortaliser vos moments précieux.",
    author: 'Romain Martin',
    creator: 'Romain Martin',
};


const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerPortfolio} width={720} height={1280} sizes="(min-width: 1200px) 40vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Mon <br /><span>portfolio</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Voyagez à travers ma vision artistique et découvrez la diversité de mon talent photographique. Chaque œuvre est une fenêtre ouverte sur mon univers, reflétant ma passion pour capturer l'instant parfait.</p>
                    <div className={styles.contentWrapper__buttonsContainer}>
                        <Button type={'primary'} size={'large'} content={'Mes photos'} scrollId={'#mesPhotos'} />
                        <Button type={'secondary'} size={'large'} content={'Réservation'} scrollId={'#contact'} />
                    </div>
                </div>
            </section>

            {/* Mes Photos */}
            <section className={styles.sections32__container} id="mesPhotos" aria-labelledby="photoTitle" tabIndex={0}>
                <header className={styles.sections__headers}>
                    <h2 className={styles.sections__titles} id="photoTitle" tabIndex={0}>Mes photos</h2>
                </header>
                <PortfolioPageComponent />
            </section>

            {/* contact */}
            <section className={`${styles.sections32__container} ${styles.section__contact}`} id="contact" aria-labelledby="contactTitle" tabIndex={0}>
                <header className={styles.sections__headers}>
                    <h2 className={styles.sections__titles} id="contactTitle" tabIndex={0}>Réservez votre shooting</h2>
                    <Link href={"mailto:myogi.photo@gmail.com"} className={styles.contact__email} tabIndex={0}>myogi.photo@gmail.com</Link>
                </header>
                <Form />
            </section>
        </main>
    );
};

export default page;