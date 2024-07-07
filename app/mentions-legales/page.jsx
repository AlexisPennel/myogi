import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Button from '../components/Button/Button';

export const metadata = {
    title: 'Mentions Légales - Myogi Photographie',
    description: "Trouvez toutes les informations légales concernant le site de Myogi Photographie, y compris les informations sur l'éditeur, l'hébergement et les conditions d'utilisation.",
    author: 'Romain Martin',
    creator: 'Romain Martin',
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
                        <p><strong>Adresse du site web:</strong> https://myogiphotographie.fr</p>
                    </li>
                    <li>
                        <p><strong>Propriétaire du site:</strong> Martin Romain</p>
                        <p><strong>Forme juridique:</strong> Entrepreneur individuel</p>
                        <p><strong>Email:</strong> <Link href={'mailto:myogi.photo@gmail.com'}>myogi.photo@gmail.com</Link> </p>
                        <p><strong>Téléphone:</strong> 06.60.35.18.97 </p>
                        <p><strong>Adresse:</strong> MARTIN Romain IMMEUBLE MARGUERITE 2 APPARTEMENT 201, RUE Bernard de Jussieu 76410 Cléon, France </p>
                    </li>
                    <li>
                        <p><strong>Responsable de publication:</strong> Martin Romain</p>
                    </li>
                    <li>
                        <p><strong>Conception et réalisation:</strong> <Link href={'https://www.alexispennel.fr/'}>Alexis Pennel - AP Développement web</Link></p>
                    </li>
                    <li>
                        <p><strong>Hébergement du site:</strong> Vercel, 440 N Barranca Ave #4133 Covina, CA 91723.</p>
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
                    <p>Le site accessible via les URL suivants : https://myogiphotographie.fr est exploité dans le respect de la législation française. L'utilisation de ce site est régie par les présentes conditions générales (ci-après "CGU"). En utilisant ce site, vous reconnaissez avoir pris connaissance de ces conditions et les avoir acceptées. Ces conditions peuvent être modifiées à tout moment et sans préavis par Romain Martin, le propriétaire du site.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>2.2. Responsabilité de l'éditeur</h3>
                    </header>
                    <p>Romain Martin met en œuvre tous les moyens dont il dispose pour assurer une information fiable et une mise à jour fiable de ses sites web. Toutefois, des erreurs ou omissions peuvent survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès de Romain Martin, et signaler toutes modifications du site qu'il jugerait utile. Romain Martin n'est en aucun cas responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.</p>
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
                    <p>Le contenu du site https://myogiphotographie.fr, incluant, sans limitation, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. <br /><br />
                    Conformément à la loi du 11 Mars 1957 sur les droit d’auteur, Romain MARTIN conserve les droits de toutes les images prises pendant une séance et à le droit de reproduction pour ses supports de communication. <br /><br />
                    Même après cession des fichiers numériques, les photographies restent la propriété intellectuelle du photographe et par conséquent, ne sont pas libres de droit. Le droit à l’image du client est quant à lui inaliénable. Un quelconque usage commercial n’est pas autorisé sans l’accord écrit du photographe.<br /><br />
                    Toute utilisation d’une photographie quel qu’en soit l’usage (concours, diffusion, exposition, reproduction, …) faite sans l’accord écrit de  Romain MARTIN constitue un délit de contrefaçon au sens de l’article L-335-2 de ce même code. Les peines encourues peuvent allier jusqu’à 3 ans d’emprisonnement et 300 000€ d’amende.<br /><br />
                    Il est interdit et puni par la loi de numériser des tirages en vue de les publier sur Internet, de retirer par n’importe quel procédé le logo/signature du photographe, et de modifier les photos (conversion en Noir et Blanc, application de filtres, recadrage, retouches diverses, etc…).<br /><br />
                    Pour toute utilisation publique (réseaux sociaux inclus), le client doit obligatoirement citer le nom du photographe.
                    </p>
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
                    <p>Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004) relative à l'informatique, aux fichiers et aux libertés, ainsi qu'au Règlement Général sur la Protection des Données (RGPD) entré en vigueur le 25 mai 2018, nous collectons uniquement les informations fournies par le formulaire de contact du site. Ces données sont utilisées exclusivement pour répondre aux demandes des utilisateurs.
                        Les utilisateurs disposent d'un droit d'accès, de rectification, de suppression et d'opposition à leurs données personnelles. Pour exercer ce droit, veuillez adresser votre demande à Romain Martin par email ou par voie postale.
                    </p>
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
                    <p>Nous collectons les informations suivantes via le formulaire de contact disponible sur notre site https://myogiphotographie.fr : (nom, Prénom, Numéro de Téléphone, Adresse électronique (email), Message)</p>
                    <p>Les informations personnelles que nous collectons sont recueillies au travers de formulaires et grâce à l’interactivité établie entre vous et notre site Web.</p>
                </section>
                <section className={styles.sub__sections}>
                    <header>
                        <h3>3.2. Utilisation des informations personnelles</h3>
                    </header>
                    <p>Les informations personnelles collectées par le site https://myogiphotographie.fr sont utilisées uniquement pour le contact avec les utilisateurs qui ont soumis des demandes via le formulaire de contact. Nous nous engageons à ne pas commercialiser les informations personnelles collectées.</p>
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
                            <p>Adresse: MARTIN Romain IMMEUBLE MARGUERITE 2 APPARTEMENT 201, RUE Bernard de Jussieu 76410 Cléon, France</p>
                        </li>
                    </ul>
                </section>
            </section>
            <div className={styles.buttons__container}>
                <Button content={'Conditions générales de vente'} link={'/conditions-generales-de-vente'} type={'secondary'} />
                <Button content={"Retour à l'accueil"} link={'/'} type={'primary'} />
            </div>
        </main>
    );
};

export default page;