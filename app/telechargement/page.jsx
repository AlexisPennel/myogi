import React from 'react';
import styles from '../page.module.css';
import styles2 from './page.module.css';
import Image from 'next/image';
import bannerDownload from '../../public/images/bannerDownload-min.webp';
import DownloadComponent from '../components/DownloadComponent/DownloadComponent';
import warning from '../../public/icons/warning.svg';
import Link from 'next/link';

const page = ({ params }) => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerDownload} width={735} height={960} sizes="(min-width: 1200px) 50vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Téléchargement <br /><span>Photo</span></h1>
                    <p className={styles2.merci__text}>Merci pour votre achat !</p>
                    <div className={styles2.warning__message}>
                        <Image src={warning} width={60} height={60} alt='Icone Attention' />
                        <p className={styles2.warning__message__content}> Attention ! Vos photos seront téléchargeables jusqu'à votre prochain achat et seulement sur cet appareil.<br /><Link href={"mailto:myogi.photo@gmail.com"}>Contactez-moi</Link> pour les recevoir par email.</p>
                    </div>
                </div>
            </section>
            <DownloadComponent params={params}/>
        </main>
    );
};

export default page;