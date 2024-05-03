import React from 'react';
import styles from '../page.module.css';
import styles2 from './page.module.css';
import Button from '../components/Button/Button';
import Image from 'next/image';
import bannerCart from '../../public/images/bannerCart-min.webp';
import CartComponent from '../components/CartComponent/CartComponent';

const page = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image src={bannerCart} width={1638} height={2048} sizes="(min-width: 1200px) 50vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Votre <br /><span>Panier</span></h1>
                    <ul className={styles2.steps__list}>
                        <li className={styles2.steps__li}>
                            <span>1</span>
                            <p>Consultez votre panier</p>
                        </li>
                        <li className={styles2.steps__li}>
                            <span>2</span>
                            <p>Ajoutez ou retirez des photos</p>
                        </li>
                        <li className={styles2.steps__li}>
                            <span>3</span>
                            <p>Finalisez votre commande</p>
                        </li>
                    </ul>
                </div>
            </section>
            <CartComponent />

        </main>
    );
};

export default page;