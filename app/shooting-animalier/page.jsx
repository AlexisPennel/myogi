import React from 'react';
import styles from '../shooting-automobile/page.module.css';
import styles2 from './page.module.css';
import Image from 'next/image';
import bannerAnimalier from '../../public/images/bannerAnimalier-min.webp';
import Button from '../components/Button/Button';
import Link from 'next/link';
import Form from '../components/Form/Form';
import ProcessCards from '../components/ProcessCards/ProcessCards';
import AnimPageGalery from '../components/AnimPageGalery/AnimPageGalery';

const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerAnimalier} width={2940} height={3840} sizes="(min-width: 1200px) 50vw, 100vw" priority className={styles2.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Shooting <br /><span>Animalier</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Capturons ensemble l'âme et la beauté de vos animaux dans des séances photo mémorables. Chaque image révèle leur caractère unique et met en lumière les moments de complicité et de naturel.</p>
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
                <AnimPageGalery/>
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