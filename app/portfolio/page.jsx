import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../components/Button/Button';
import bannerPortfolio from '../../public/images/bannerPortfolio-min.webp';

const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerPortfolio} width={2940} height={3840} sizes="(min-width: 1200px) 50vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Mon <br /><span>portfolio</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>Votre photographe à Rouen pour des clichés animaliers et automobiles uniques. Explorez la beauté à travers mon objectif.</p>
                    <div className={styles.contentWrapper__buttonsContainer}>
                        <Button type={'primary'} size={'large'} content={'Mes prestations'} scrollId={'#mesPrestations'} />
                        <Button type={'secondary'} size={'large'} content={'Qui suis-je ?'} scrollId={'#about'} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default page;