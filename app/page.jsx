import Image from "next/image";
import styles from "./page.module.css";
import bannerHome from '../public/images/bannerHome.jpg';


export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero__section}>
        <Image src={bannerHome} width={2179} height={3873} sizes="100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" />
        <div className={styles.hero__section__content__wrapper}>
          <h1 className={styles.hero__section__content__title}>Capturons <br /><span>l'instant parfait</span></h1>
          <p className={styles.hero__section__content__description}>Votre photographe à Rouen pour des clichés animaliers et automobiles uniques. Explorez la beauté à travers mon objectif.</p>
        </div>
      </section>
    </main>
  );
}
