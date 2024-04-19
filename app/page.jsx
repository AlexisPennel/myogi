import Image from "next/image";
import styles from "./page.module.css";
import bannerHome from '../public/images/bannerHome-min.webp';
import Button from "./components/Button/Button";
import ServicesCards from "./components/ServicesCards/ServicesCards";
import PortfolioHome from "./components/PortfolioHome/PortfolioHome";
import BannerAbout from "./components/BannerAbout/BannerAbout";
import Link from "next/link";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
        <Image src={bannerHome} width={2940} height={3840} sizes="(min-width: 1200px) 50vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" />
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
      <section className={styles.sections48__container} id="mesPrestations" aria-labelledby="servicesTitle" tabIndex={0}>
        <header className={styles.sections__headers}>
          <h2 className={styles.sections__titles} id="servicesTitle" tabIndex={0}>Mes prestations</h2>
        </header>
        <ServicesCards />
      </section>

      {/* Portfolio */}
      <section className={styles.sections48__container} id="mesPrestations" aria-labelledby="portfolioTitle" tabIndex={0}>
        <header className={`${styles.sections__headers} ${styles.sections__headers__center}`}>
          <h2 className={styles.sections__titles} id="portfolioTitle" tabIndex={0}>Mon Portfolio</h2>
          <p tabIndex={0}>Plongez dans une sélection de mes meilleures œuvres photographiques. Chaque cliché vous invite à explorer l'étendue de ma créativité et de mon expertise.</p>
        </header>
        <PortfolioHome />
        <div className={styles.portfolio__button__container}>
          <Button type={'primary'} content={'Voir tout le portfolio'} link={'/portfolio'} />
        </div>
      </section>

      {/* About */}
      <section className={styles.sections32__container} id="about" aria-labelledby="aboutTitle" tabIndex={0}>
        <header className={styles.sections__headers}>
          <h2 className={styles.sections__titles} id="aboutTitle" tabIndex={0}>Qui suis-je ?</h2>
        </header>
        <div className={styles.about__responsive__wrapper}>
          <BannerAbout />
          <p className={styles.about__bio} tabIndex={0}>Je suis Romain Martin, photographe professionnel basé à Rouen, en Normandie, spécialisé dans la photographie animalière et automobile. Ma passion pour la capture de moments uniques, qui m'anime depuis de nombreuses années, m'a permis de perfectionner mon art. <br /><br />
            Je m'efforce d'immortaliser la beauté et l'émotion inhérentes à chaque sujet, mettant en lumière l'éclat et la singularité de chaque scène, qu'il s'agisse de la grâce naturelle d'un animal ou du caractère distinctif d'une voiture. <br /><br />
            Je vous invite à plonger dans mon univers et à considérer une collaboration pour votre projet photographique, que ce soit en Normandie ou au-delà. Ensemble, explorons la possibilité de créer des souvenirs durables et significatifs à travers mon objectif.</p>
        </div>
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
}
