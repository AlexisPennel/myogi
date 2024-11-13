import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';
import bannerCards from '../../../public/images/bannerCart-min.webp';
import PaymentComponent from './PaymentComponent/PaymentComponent';


export const metadata = {
    title: 'Paiement carte cadeau – myogiphotographie.fr',
    description: "Complétez l'achat de votre carte cadeau pour offrir un shooting photo en Normandie. Cadeau idéal pour des moments inoubliables.",
    author: 'Romain Martin',
    creator: 'Romain Martin',
    robots: 'noindex',
};

const page = () => {
    return (
        <main className={styles.main}>
            {/* <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerCards} width={2940} height={3840} sizes="(min-width: 1200px) 40vw, 100vw" priority className={styles.hero__section__banner} alt="Photo d'un Akita Inu roux" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Paiement<br /><span>carte cadeau</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Effectuez le paiement de votre carte cadeau facilement via PayPal ou par carte bancaire.</p>
                </div>
            </section> */}
            <PaymentComponent />
            
        </main>
    );
};

export default page;
