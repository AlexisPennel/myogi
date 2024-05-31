import React from 'react';
import styles from '../mentions-legales/page.module.css';
import styles2 from './page.module.css';
import Link from 'next/link';
import processCard1 from '../../public/images/processCard1-min.webp';
import processCard2 from '../../public/images/processCard2-min.webp';
import processCard3 from '../../public/images/processCard3-min.webp';
import bannerCart from '../../public/images/bannerCart-min.webp'
import bannerDownload from '../../public/images/bannerDownload-min.webp'
import Image from 'next/image';
import Button from '../components/Button/Button';

export const metadata = {
    title: 'Crédits Photos - Myogi Photographie',
    description: "Découvrez les crédits des photos utilisées sur le site de myogiphotographie.fr, y compris les sources et les contributions des photographes.",
    author: 'Romain Martin',
    creator: 'Romain Martin',
  };

const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.sections}>
                <h1>Crédits des images du site web</h1>
                <p>La présente page de crédit a été créée dans le but de donner le mérite et la reconnaissance aux talentueux photographes d'Unsplash. Je souhaite exprimer ma gratitude envers ces artistes et les remercier pour leur générosité en permettant l'utilisation gratuite de leurs œuvres.<br /><br />
                Chaque image utilisée sur ce site venant du site Unsplash est attribuée à son photographe respectif et est accompagnée d'un lien vers le profil du photographe sur Unsplash. En donnant crédit aux photographes, nous contribuons à soutenir leur travail et à promouvoir leur talent auprès de notre audience.</p>
                <ul className={styles.sections__list}>
                    <li className={styles2.sections__list__li}>
                        <Image src={processCard1} width={720} height={720} alt="Photo d'une carte sur un téléphone portable" className={styles2.sections__list__image} />
                        <Link href={'https://unsplash.com/fr/@tamas_tuzeskatai'}>Photo de Tamas Tuzes-Katai</Link>
                    </li>
                    <li className={styles2.sections__list__li}>
                        <Image src={processCard2} width={720} height={720} alt="Photo d'un objectif d'appareil photo" className={styles2.sections__list__image} />
                        <Link href={'https://unsplash.com/fr/@dollargill'}>Photo de Dollar Gill</Link>
                    </li>
                    <li className={styles2.sections__list__li}>
                        <Image src={processCard3} width={720} height={720} alt="Photo de photos imprimées" className={styles2.sections__list__image} />
                        <Link href={'https://unsplash.com/fr/@sarandywestfall_photo'}>Photo de Sarandy Westfall</Link>
                    </li>
                    <li className={styles2.sections__list__li}>
                        <Image src={bannerCart} width={720} height={720} alt="Photo d'un appareil photo" className={styles2.sections__list__image} />
                        <Link href={'https://unsplash.com/fr/@opticonor'}>Photo de Conor Luddy</Link>
                    </li>
                    <li className={styles2.sections__list__li}>
                        <Image src={bannerDownload} width={720} height={720} alt="Main qui tient des photos imprimées sur papier" className={styles2.sections__list__image} />
                        <Link href={'https://unsplash.com/fr/@opticonor'}>Photo de Cole Keister</Link>
                    </li>
                </ul>
            </section>
            <Button content={"Retour à l'accueil"} link={'/'} type={'primary'} />
        </main>
    );
};

export default page;