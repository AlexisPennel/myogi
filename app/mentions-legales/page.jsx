import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Button from '../components/Button/Button';

export const metadata = {
    title: 'Mentions légales',
    description: "Mentions légales du site de Romain Martin, photographe à Rouen",
    author: 'Romain Martin',
    creator: 'Romain Martin',
    robots: 'noindex'
  };

const page = () => {
    return (
        <main className={styles.main}>
            <h1>Mentions légales</h1>
            <ul className={styles.page__list}>
                <li><Link href={'#section-1'} className={styles.sommaire}>1. Informations</Link></li>
                <li><Link href={'#section-2'} className={styles.sommaire}>2. Conditions Générales d'Utilisation du site</Link></li>
                <li><Link href={'#section-3'} className={styles.sommaire}>3. Politique de confidentialité</Link></li>
            </ul>
            <section tabIndex={0} aria-labelledby='section-1' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-1'>1. Informations</h2>
                </header>
                <ul className={styles.sections__list}>
                    <li>
                        <p><strong>Adresse du site web:</strong> https://myogiphotographie.vercel.app/</p>
                    </li>
                    <li>
                        <p><strong>Propriétaire:</strong> Martin Romain</p>
                    </li>
                    <li>
                        <p><strong>Responsable de publication:</strong> Martin Romain</p>
                    </li>
                    <li>
                        <p><strong>Conception et réalisation:</strong> <Link href={'https://www.alexispennel.fr/'}>Alexis Pennel - AP Développement web</Link></p>
                    </li>
                    <li>
                        <p><strong>Hébergement:</strong> Vercel, 440 N Barranca Ave #4133 Covina, CA 91723.</p>
                    </li>
                    <li>
                        <p><strong>Contact: </strong></p>
                        <p>Nom-Prénom : Martin Romain</p>
                        <p>Forme juridique: Entrepreneur individuel</p>
                        <p>Email : <Link href={'mailto:myogi.photo@gmail.com'}>myogi.photo@gmail.com</Link> </p>
                        <p>Téléphone : </p>
                        <p>Adresse : </p>

                    </li>
                </ul>
            </section>
            <section tabIndex={0} aria-labelledby='section-2' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-2'>2. Conditions Générales d'Utilisation du site</h2>
                </header>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>2.1. Acceptation des conditions d'utilisation</h3>
                    </header>
                    <p>Le site accessible via les URL suivants :  https://myogiphotographie.vercel.app/ est exploité dans le respect de la législation française. L'utilisation de ce site est régie par les présentes conditions générales (ci-après "CGU"). En utilisant ce site, vous reconnaissez avoir pris connaissance de ces conditions et les avoir acceptées. Ces conditions peuvent être modifiées à tout moment et sans préavis par Romain Martin, le propriétaire du site.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>2.2. Responsabilité de l'éditeur</h3>
                    </header>
                    <p>Romain Martin met en œuvre tous les moyens dont il dispose pour assurer une information fiable et une mise à jour fiable de ses sites web. Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès Romain Martin, et signaler toutes modifications du site qu'il jugerait utile. Romain Martin n'est en aucun cas responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>2.3. Liens hypertextes et sites tiers</h3>
                    </header>
                    <p>Le site internet de Romain Martin peuvent offrir des liens vers d'autres sites internet ou d'autres ressources disponibles sur Internet. Romain Martin ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites internet. Romain Martin ne garantit pas et ne peut être tenue pour responsable de la disponibilité de tels sites et sources externes, ni ne la garantit. Romain Martin ne peut être tenue responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu'ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se conformer à leurs conditions d'utilisation.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>2.4. Propriété intellectuelle</h3>
                    </header>
                    <p>Le contenu du site https://myogiphotographie.vercel.app/, incluant, sans limitation, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Romain Martin. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>2.5. litiges</h3>
                    </header>
                    <p>Les présentes conditions sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de Romain Martin. La langue de référence, pour le règlement de contentieux éventuels, est le français.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>2.6. Données personnelles</h3>
                    </header>
                    <p>Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 sur la protection des personnes physiques à l'égard du traitement des données à caractère personnel) relative à l'informatique, aux fichiers et aux libertés, ce site a fait l'objet d'une déclaration à la Commission Nationale de l'Informatique et des Libertés (www.cnil.fr). Les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition à leurs données personnelles. Pour exercer ce droit, adressez votre demande à Romain Martin par email ou par voie postale.</p>
                </section>
            </section>

            {/* Politique de confidentialite */}
            <section tabIndex={0} aria-labelledby='section-3' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-3'>3. Politique de confidentialité</h2>
                </header>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>3.1. Collecte des informations personnelles</h3>
                    </header>
                    <p>Nous collectons les informations suivantes via le formulaire de contact disponible sur notre site https://myogiphotographie.vercel.app/ :</p>
                    <ul className={styles.sections__list}>
                        <li><p>Nom</p></li>
                        <li><p>Prénom</p></li>
                        <li><p>Numéro de Téléphone</p></li>
                        <li><p>Adresse électronique (email)</p></li>
                        <li><p>Message</p></li>
                    </ul>
                    <p>Les informations personnelles que nous collectons sont recueillies au travers de formulaires et grâce à l’interactivité établie entre vous et notre site Web.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>3.2. Utilisation des informations personnelles</h3>
                    </header>
                    <p>Les informations personnelles collectées par le site  https://myogiphotographie.vercel.app/ sont utilisées uniquement pour le contact avec les utilisateurs qui ont soumis des demandes via le formulaire de contact. Nous nous engageons à ne pas commercialiser les informations personnelles collectées.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>3.3. Durée de conservation des informations personnelles</h3>
                    </header>
                    <p>Les données personnelles sont conservées uniquement pour la durée nécessaire à la gestion de notre relation commerciale avec vous, ou conformément aux exigences légales.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>3.4. Droits d'accès, de rectification et de suppression</h3>
                    </header>
                    <p>Vous disposez d’un droit d’accès, de rectification et de suppression des données personnelles qui vous concernent. Pour exercer ces droits, vous pouvez envoyer votre demande à :</p>
                    <ul className={styles.sections__list}>
                        <li>
                            <p>Email: <Link href={'mailto:myogi.photo@gmail.com'}>myogi.photo@gmail.com</Link></p>
                        </li>
                        <li>
                            <p>Adresse:</p>
                        </li>
                    </ul>
                </section>
            </section>
                <Button content={'Retour sur le site'} link={'/'} type={'primary'} />
        </main>
    );
};

export default page;