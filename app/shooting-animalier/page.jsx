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

export const metadata = {
    title: 'Photographe animalier normandie - Réservez votre shooting',
    description: "Photographe animalier en Normandie, basé à Rouen. Je capture les meilleurs moments de vos animaux de compagnie. Réservez votre séance dès maintenant !",
    author: 'Romain Martin',
    creator: 'Romain Martin',
};


const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerAnimalier} width={2940} height={3840} sizes="(min-width: 1200px) 40vw, 100vw" priority className={styles2.hero__section__banner} alt="Photo d'un Akita Inu roux" tabIndex={-1} placeholder="blur" noindex="true" draggable="false"/>
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Shooting <br /><span>Animalier</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Plongez dans des séances photo inoubliables avec votre <strong>photographe animalier en Normandie</strong>. Chaque cliché révèle la personnalité unique de vos animaux, immortalisant des moments de complicité et d'authenticité. Offrez-vous des souvenirs inoubliables dès aujourd'hui.</p>
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
                    <p tabIndex={0}>Découvrez une sélection de mes meilleures photographies animalières. Plongez dans un univers captivant où la beauté de la nature et la grâce des animaux se rencontrent à travers mon objectif.</p>
                </header>
                <AnimPageGalery/>
                <div className={styles.see__morePhotos}>
                    <h3>Découvrez plus de photos sur ma page portfolio</h3>
                    <Button type={'primary'} size={'large'} content={'Voir le portfolio'} link={"/portfolio"} />
                </div>
            </section>

            {/* contact */}
            <section className={`${styles.sections32__container} ${styles.section__contact}`} id="contact" aria-labelledby="contactTitle" tabIndex={0}>
                <header className={styles.sections__headers}>
                    <h2 className={styles.sections__titles} id="contactTitle" tabIndex={0}>Envie d'un shooting animalier ?</h2>
                    <p>Contactez-moi dès maintenant par email ou via le formulaire ci-dessous pour discuter de votre projet de shooting. Décrivez vos besoins et vos attentes, et recevez un devis sur mesure adapté à vos besoins.</p>
                    <Link href={"mailto:myogi.photo@gmail.com"} className={styles.contact__email} tabIndex={0}>myogi.photo@gmail.com</Link>
                </header>
                <Form />
            </section>
        </main>
    );
};

export default page;