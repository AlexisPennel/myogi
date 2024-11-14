import React from 'react';
import styles from '../page.module.css';
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
            <PaymentComponent /> 
        </main>
    );
};

export default page;
