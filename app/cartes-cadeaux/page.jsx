import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import bannerCards from '../../public/images/bannerCards.webp';
import Button from '../components/Button/Button';
import Link from 'next/link';
import Form from '../components/Form/Form';
import GiftCards from '../components/GiftCards/GiftCards';
import animBanner from '../../public/images/cartes/animalBanner-min.webp'

export const metadata = {
    title: 'Carte cadeau shooting photo en Normandie – Achetez dès maintenant',
    description: "Offrez un shooting photo en Normandie avec nos cartes cadeaux : automobile, animalier, ou personnalisé. Cadeau unique pour des souvenirs mémorables. Disponible dès maintenant !",
    author: 'Romain Martin',
    creator: 'Romain Martin',
};


const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={animBanner} width={2940} height={3840} sizes="(min-width: 1200px) 40vw, 100vw" priority className={styles.hero__section__banner} alt="Photo d'un Akita Inu roux" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Cartes cadeaux<br /><span>shooting photo</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Offrez une expérience photo unique en Normandie avec mes cartes cadeaux : shootings animaliers, automobiles, ou autres séances sur mesure pour des souvenirs inoubliables avec un photographe passionné.</p>
                    <div className={styles.contentWrapper__buttonsContainer}>
                        <Button type={'primary'} size={'large'} content={'Découvrir'} scrollId={'#cartescadeaux'} />
                        <Button type={'secondary'} size={'large'} content={'Réservation'} scrollId={'#contact'} />
                    </div>
                </div>
            </section>

            <section className={styles.sections48__container} id="cartescadeaux" aria-labelledby="cartecadeauxTitle" tabIndex={0}>
                <header className={`${styles.sections__headers} ${styles.sections__headers__center}`}>
                    <h2 className={styles.sections__titles} id="cartecadeauxTitle" tabIndex={0}>3 cartes cadeaux sur mesure</h2>
                    <p tabIndex={0}>Découvrez mes 3 cartes cadeaux, conçues pour s’adapter à tous vos besoins.</p>
                </header>
                <GiftCards />
            </section>

            {/* contact */}
            <section className={`${styles.sections32__container} ${styles.section__contact}`} id="contact" aria-labelledby="contactTitle" tabIndex={0}>
                <header className={styles.sections__headers}>
                    <h2 className={styles.sections__titles} id="contactTitle" tabIndex={0}>Réserverz un créneau pour votre carte cadeau</h2>
                    <p>Complétez ce formulaire avec votre numéro de carte cadeau et une date pour réserver votre shooting photo. N'hésitez pas à me détailler votre projet photo !</p>
                    <Link href={"mailto:myogi.photo@gmail.com"} className={styles.contact__email} tabIndex={0}>myogi.photo@gmail.com</Link>
                </header>
                <Form />
            </section>
        </main>
    );
};

export default page;