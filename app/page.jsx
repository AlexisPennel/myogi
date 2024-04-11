import Image from "next/image";
import styles from "./page.module.css";
import bannerHome from '../public/images/bannerHome.jpg';
import Button from "./components/Button/Button";
import ServicesCards from "./components/ServicesCards/ServicesCards";
import Loader from "./components/Loader/Loader";
import PortfolioHome from "./components/PortfolioHome/PortfolioHome";


export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
        <Image src={bannerHome} width={2179} height={3873} sizes="100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" />
        <div className={styles.hero__section__contentWrapper}>
          <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Capturons <br /><span>l'instant parfait</span></h1>
          <p className={styles.contentWrapper__description} tabIndex={0}>Votre photographe à Rouen pour des clichés animaliers et automobiles uniques. Explorez la beauté à travers mon objectif.</p>
          <div className={styles.contentWrapper__buttonsContainer}>
            <Button type={'primary'} size={'large'} content={'Mes prestations'} scrollId={'#mesPrestations'} />
            <Button type={'secondary'} size={'large'} content={'Qui suis-je ?'} scrollId={'#about'} />
          </div>
        </div>
      </section>

      {/* Mes prestations */}
      <section className={styles.sections48__container} id="mesPrestations">
        <header className={styles.sections__headers}>
          <h2 className={styles.sections__titles}>Mes prestations</h2>
        </header>
        <ServicesCards />
      </section>

      {/* Mes prestations */}
      <section className={styles.sections48__container} id="mesPrestations">
        <header className={`${styles.sections__headers} ${styles.sections__headers__center}`}>
          <h2 className={styles.sections__titles}>Mon Portfolio</h2>
          <p>Plongez dans une sélection de mes meilleures œuvres photographiques. Chaque cliché vous invite à explorer l'étendue de ma créativité et de mon expertise.</p>
        </header>
        <PortfolioHome />
      </section>
    </main>
  );
}
