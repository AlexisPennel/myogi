import Image from "next/image";
import styles from "./page.module.css";
import bannerHome from '../public/images/bannerHome-min.webp';
import Button from "./components/Button/Button";
import ServicesCards from "./components/ServicesCards/ServicesCards";
import PortfolioHome from "./components/PortfolioHome/PortfolioHome";
import aboutBanner from '../public/images/bannerAbout.webp';
import Link from "next/link";
import Form from "./components/Form/Form";
import giftCard1 from '../public/images/cartes/animalier.png';
import giftCard2 from '../public/images/cartes/auto.png';
import giftCard3 from '../public/images/cartes/perso.png';
import GiftCardsCaroussel from "./components/GiftCardsCaroussel/GiftCardsCaroussel";

export const metadata = {
  title: 'Photographe à Rouen - Animalier et Automobile | Réservez Maintenant !',
  description: "Spécialiste de la photographie animalière et automobile à Rouen, capturons vos moments précieux. Réservez maintenant !",
  author: 'Romain Martin',
  creator: 'Romain Martin',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle" >
        <Image src={bannerHome} width={720} height={1280} sizes="(min-width: 1200px) 40vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Romain Martin d'une BMW M4 blanche" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
        <div className={styles.hero__section__contentWrapper}>
          <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Capturons <br /><span>l'instant parfait</span></h1>
          <p className={styles.contentWrapper__description} tabIndex={0}><strong>Photographe à Rouen</strong>, je suis spécialisé dans la photographie animalière et automobile. Offrez-vous un shooting professionnel pour immortaliser vos moments les plus précieux. </p>
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

      {/* Cartes cadeaux */}
      <section className={styles.sections48__container} aria-labelledby="CartesCadeaux" tabIndex={0}>
        <header className={`${styles.sections__headers} ${styles.sections__headers__center}`}>
          <h2 className={styles.sections__titles} id="CartesCadeaux" tabIndex={0}>Offrez une carte cadeau à vos proches</h2>
          {/* <p className={styles.offer}>Offre de lancement – Jusqu'au 01/12/2024</p> */}
          <p tabIndex={0}>Offrez une carte cadeau pour un shooting photo animalier, automobile, ou personnalisé à Rouen et partout en Normandie ! Faites plaisir à vos proches passionnés d’animaux, de voitures, ou de projets sur mesure avec une séance photo professionnelle.</p>
        </header>
        <GiftCardsCaroussel />
        <p className={styles.giftCardCTA}>Achetez facilement votre carte cadeau en ligne et partagez-la avec vos proches pour une expérience unique dans la région normande.</p>
        <div className={styles.portfolio__button__container}>
          <Button type={'primary'} size={'large'} content={'Découvrir les cartes cadeaux'} link={'/cartes-cadeaux'} />
        </div>
      </section>

      {/* Portfolio */}
      <section className={styles.sections48__container} id="Portfolio" aria-labelledby="portfolioTitle" tabIndex={0}>
        <header className={`${styles.sections__headers} ${styles.sections__headers__center}`}>
          <h2 className={styles.sections__titles} id="portfolioTitle" tabIndex={0}>Mon Portfolio</h2>
          <p tabIndex={0}>Plongez dans une sélection de mes meilleures œuvres photographiques. Chaque cliché vous invite à explorer l'étendue de ma créativité et de mon expertise.</p>
        </header>
        <PortfolioHome />
        <div className={styles.portfolio__button__container}>
          <Button type={'primary'} size={'large'} content={'Voir le portfolio complet'} link={'/portfolio'} />
        </div>
      </section>

      {/* About */}
      <section className={styles.sections32__container} id="about" aria-labelledby="aboutTitle" tabIndex={0}>
        <header className={`${styles.sections__headers} ${styles.sections__headers__center}`}>
          <h2 className={styles.sections__titles} id="aboutTitle" tabIndex={0}>Qui suis-je ?</h2>
        </header>
        <div className={styles.about__responsive__wrapper}>
          <Image src={aboutBanner} width={1080} height={1080} alt="Photo personnelle du photographe Romain Martin" className={styles.about__banner} tabIndex={0} noindex="true" draggable="false" placeholder="blur" />
          <p className={styles.about__bio} tabIndex={0}>Je suis Romain Martin, <strong>photographe à rouen</strong>. Passionné depuis plusieurs années par la photographie, et plus particulièrement la photographie animalière et automobile, j'ai décidé de vous proposer mes services pour immortaliser vos moments les plus précieux.<br /><br />
            Grâce à mon expérience et ma passion, je m'engage à capturer l'essence de chaque instant, révélant la beauté et l'émotion de vos compagnons à quatre pattes et de vos voitures. <br /><br />
            Au-delà de la simple capture d'images, je m'efforce de créer des œuvres qui vous captivent et reflètent mon style photographique. Confiez-moi vos précieux moments, et ensemble, donnons vie à vos histoires à travers mes photographies.</p>
        </div>
      </section>

      {/* contact */}
      <section className={`${styles.sections32__container} ${styles.section__contact}`} id="contact" aria-labelledby="contactTitle" tabIndex={0}>
        <header className={styles.sections__headers}>
          <h2 className={styles.sections__titles} id="contactTitle" tabIndex={0}>Réservez votre shooting</h2>
          <p>Contactez-moi dès maintenant par email ou via le formulaire ci-dessous pour discuter de votre projet de shooting. Décrivez vos besoins et vos attentes, et recevez un devis sur mesure adapté à vos besoins.</p>
          <Link href={"mailto:myogi.photo@gmail.com"} className={styles.contact__email} tabIndex={0}>myogi.photo@gmail.com</Link>
        </header>
        <Form />
      </section>
    </main>
  );
}
