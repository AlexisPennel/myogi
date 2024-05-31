import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../components/Button/Button';
import bannerPortfolio from '../../public/images/bannerPortfolio-min.webp';
import PortfolioPageComponent from '../components/PortfolioPageComponent/PortfolioPageComponent';
import Form from '../components/Form/Form';
import Link from 'next/link';

export const metadata = {
    title: 'Photographe animalier et photographe automobile - Portfolio',
    description: "Découvrez mes dernières photographies animalières et automobiles ! Réservez votre shooting pour immortaliser vos moments précieux.",
    author: 'Romain Martin',
    creator: 'Romain Martin',
};


const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerPortfolio} width={720} height={1280} sizes="(min-width: 1200px) 40vw, 100vw" priority className={styles.hero__section__banner} alt="Photo d'un chiot Akita Inu blanc" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Mon <br /><span>portfolio</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Bienvenue sur mon portfolio. Spécialisé dans la <strong>photographie animalière</strong>, je capture les moments précieux de vos animaux de compagnie, notamment les chiens. Passionné également par la <strong>photographie automobile</strong>, je mets en lumière l'élégance et la puissance des véhicules. Explorez mon travail et découvrez la passion et la qualité qui se reflètent dans chaque image.</p>
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
                    <p>Découvrez mes clichés. Venez explorer des moments capturés avec passion et expertise. Cliquez sur les images pour les agrandir et en apprécier chaque détail.</p>
                </header>
                <PortfolioPageComponent />
                <div className={styles.callToAction}>
                    <h3>Vous appréciez mon travail ?</h3>
                    <p>Envoyez-moi dès maintenant un message pour organiser votre séance photo avec un photographe animalier et automobile passionné.</p>
                    <Button type={'secondary'} size={'large'} content={'Réserver maintenant'} scrollId={'#contact'} />
                </div>
            </section>

            {/* contact */}
            <section className={`${styles.sections32__container} ${styles.section__contact}`} id="contact" aria-labelledby="contactTitle" tabIndex={0}>
                <header className={styles.sections__headers}>
                    <h2 className={styles.sections__titles} id="contactTitle" tabIndex={0}>Réservez votre shooting</h2>
                    <p>Contactez-moi dès maintenant par email ou via le formulaire ci-dessous pour discuter de votre projet de shooting. Décrivez vos besoins et vos attentes, et recevez un devis sur mesure adapté à vos besoins.</p>
                    <Link href={"mailto:myogi.photo@gmail.com"} className={styles.contact__email} tabIndex={0}>myogi.photo@gmail.com</Link>
                </header>
                <Form />
            </section>
        </main>
    );
};

export default page;