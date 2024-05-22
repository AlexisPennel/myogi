import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import bannerAuto from '../../public/images/bannerAuto-min.webp';
import Button from '../components/Button/Button';
import Link from 'next/link';
import Form from '../components/Form/Form';
import ProcessCards from '../components/ProcessCards/ProcessCards';
import AutoPageGalery from '../components/AutoPageGalery/AutoPageGalery';

export const metadata = {
    title: 'Shooting automobile à Rouen',
    description: "Photographe automobile à Rouen, je capture l'élégance de votre voiture. Réservez votre shooting professionnel dès maintenant !",
    author: 'Romain Martin',
    creator: 'Romain Martin',
};

const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerAuto} width={2940} height={3840} sizes="(min-width: 1200px) 50vw, 100vw" priority className={styles.hero__section__banner} alt="Photo d'une Porsche Cayman GTS" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Shooting <br /><span>Automobile</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Photographe automobile, je capture la beauté exceptionnelle de votre voiture. Chaque cliché sublime les détails et reflète son élégance unique.</p>
                    <div className={styles.contentWrapper__buttonsContainer}>
                        <Button type={'primary'} size={'large'} content={'Le déroulement '} scrollId={'#deroulement'} />
                        <Button type={'secondary'} size={'large'} content={'Réservation'} scrollId={'#contact'} />
                    </div>
                </div>
            </section>

            {/* process */}
            <section className={styles.sections48__container} id="deroulement" aria-labelledby="deroulementTitle" tabIndex={0}>
                <header className={styles.sections__headers}>
                    <h2 className={styles.sections__titles} id="deroulementTitle" tabIndex={0}>Le déroulement</h2>
                </header>
                <ProcessCards />
            </section>

            {/* Apercus du resultat */}
            <section className={styles.sections32__container} id="galerie" aria-labelledby="galerieTitle" tabIndex={0}>
                <header className={`${styles.sections__headers} ${styles.sections__headers__center}`}>
                    <h2 className={styles.sections__titles} id="galerieTitle" tabIndex={0}>Aperçu du résultat</h2>
                    <p tabIndex={0}>Plongez dans un aperçu de mes dernières réalisations en photographie automobile. Chaque cliché choisi démontre mon dévouement à saisir l'élégance et la puissance de chaque véhicule, offrant ainsi une expérience visuelle captivante.</p>
                </header>
                <AutoPageGalery />
                <div className={styles.see__morePhotos}>
                    <h3>Découvrez plus de photos sur ma page portfolio</h3>
                    <Button type={'primary'} size={'large'} content={'Voir le portfolio'} link={"/portfolio"} />
                </div>
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