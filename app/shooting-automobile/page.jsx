import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import bannerAuto from '../../public/images/bannerAuto.jpg'
import Button from '../components/Button/Button';
import Link from 'next/link';
import Form from '../components/Form/Form';
import ProcessCards from '../components/ProcessCards/ProcessCards';
import AutoPageGalery from '../components/AutoPageGalery/AutoPageGalery';

const page = () => {
    const images = [
        "/images/ShootingAuto/01.jpg",
        "/images/ShootingAuto/02.jpg",
        "/images/ShootingAuto/03.jpg",
        "/images/ShootingAuto/04.jpg",
        "/images/ShootingAuto/05.jpg",
        "/images/ShootingAuto/06.jpg",
        "/images/ShootingAuto/07.jpg",
        "/images/ShootingAuto/08.jpg",
    ];


    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerAuto} width={1920} height={1080} sizes="(min-width: 1200px) 50vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Shooting <br /><span>Automobile</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Elevons ensemble la beauté de votre automobile avec des shootings exceptionnels. Chaque photo sublime les détails et reflète l'élégance unique de votre véhicule.</p>
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
                    <p tabIndex={0}>Immergez vous dans un aperçu de mes réalisations les plus récentes dans le monde de la photographie automobile. Chaque cliché sélectionné illustre mon engagement à capturer l'élégance et la puissance de chaque véhicule.</p>
                </header>
                <AutoPageGalery imagesFiles={images}/>
            </section>

            {/* contact */}
            <section className={`${styles.sections32__container} ${styles.section__contact}`} id="contact" aria-labelledby="contactTitle" tabIndex={0}>
                <header className={styles.sections__headers}>
                    <h2 className={styles.sections__titles} id="contactTitle" tabIndex={0}>Réservez votre shooting</h2>
                </header>
                <Link href={"mailto:myogi.photo@gmail.com"} className={styles.contact__email} tabIndex={0}>myogi.photo@gmail.com</Link>
                <Form />
            </section>
        </main>
    );
};

export default page;