import React from 'react';
import styles from '../mentions-legales/page.module.css';
import Link from 'next/link';
import Button from '../components/Button/Button';

export const metadata = {
    title: 'Conditions générales de vente',
    description: "Conditions générales de vente de Romain Martin, photographe à Rouen",
    author: 'Romain Martin',
    creator: 'Romain Martin',
    robots: 'noindex'
};


const page = () => {
    return (
        <main className={styles.main}>
            <header className={styles.main__header}>
                <h1>Conditions générales de vente</h1>
                <p>Date d'entrée en vigueur : 1 Mai 2024</p>
                <p>Les présentes conditions générales de vente (ci-après dénommées les "Conditions") régissent l'achat de produits photographiques (ci-après dénommés les "Produits") sur le site web <Link href={'/'}>https://myogiphotographie.vercel.app/</Link>, exploité par MARTIN Romain. En effectuant un achat sur ce site web, vous acceptez les présentes Conditions. Veuillez les lire attentivement avant de passer une commande. Adresse du siège social : Immeuble MARGUERITE, Rue Bernard de Jussieu 76410 Cléon</p>
                <p>SIRET : 97941663300019</p>
            </header>
            <section tabIndex={0} aria-labelledby='section-1' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-1'>1. Produits et Commandes</h2>
                </header>
                <h3>1.1. Description des Produits:</h3>
                <p>Le Photographe propose à la vente des tirages photographiques numériques de ses œuvres originales, ainsi que des licences numériques permettant l'utilisation des images dans un cadre défini.</p>
                <h3>1.2. Commande :</h3>
                <p>Pour passer une commande, veuillez suivre les instructions fournies sur le site web. En passant une commande, vous déclarez être légalement autorisé à conclure des contrats contraignants.</p>
                <h3>1.3. Acceptation de la Commande :</h3>
                <p>Toutes les commandes sont soumises à l'acceptation du Photographe, qui se réserve le droit de refuser toute commande à sa seule discrétion.</p>
            </section>
            <section tabIndex={0} aria-labelledby='section-2' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-2'>2. Prix et Paiement</h2>
                </header>
                <h3>2.1. Prix :</h3>
                <p>Les prix des Produits sont indiqués sur le site web et sont sujets à changement sans préavis. Tous les prix sont en Euro et incluent les taxes applicables.</p>
                <h3>2.2. Paiement:</h3>
                <p>Le paiement des Produits s'effectue au moment de la commande, par les moyens de paiement acceptés sur le site web. La commande sera traitée une fois le paiement intégral reçu.</p>
            </section>
            <section tabIndex={0} aria-labelledby='section-3' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-3'>3. Livraison et Transfert de Propriété</h2>
                </header>
                <h3>3.1. Livraison :</h3>
                <p>Les délais de livraison sont estimés et peuvent varier en fonction de votre emplacement. Le Photographe s'efforce de livrer les Produits dans les meilleurs délais, mais ne peut garantir des délais de livraison précis.</p>
                <h3>3.2. Transfert de Propriété :</h3>
                <p>La propriété des Produits est transférée à l'Acheteur une fois que le Photographe a reçu le paiement intégral et que les Produits ont été livrés à l'Acheteur.</p>
            </section>
            <section tabIndex={0} aria-labelledby='section-4' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-4'>3. Livraison et Transfert de Propriété</h2>
                </header>
                <h3>4.1. Droits d'auteur :</h3>
                <p>Tous les droits d'auteur sur les œuvres photographiques restent la propriété exclusive du Photographe.</p>
                <h3>4.2. Licence d'utilisation :</h3>
                <p>En achetant une licence numérique, l'Acheteur reçoit une autorisation limitée d'utiliser l'image selon les termes spécifiés dans la licence. Toute utilisation en dehors de ces termes est strictement interdite.</p>
            </section>
            <section tabIndex={0} aria-labelledby='section-5' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-5'>5. Politique de Retour et de Remboursement</h2>
                </header>
                <p>Nous nous engageons à offrir une satisfaction totale à nos clients. Si vous rencontrez un problème avec votre achat numérique, veuillez nous contacter dans les 14 jours suivant la date d'achat pour discuter des options de retour ou de remboursement.</p>
                <h3>Conditions de Retour et de Remboursement :</h3>
                <ul className={styles.sections__list__cgv}>
                    <li>
                        <p>Les demandes de retour ou de remboursement doivent être soumises dans les 14 jours suivant la date d'achat.</p>
                    </li>
                    <li>
                        <p>Les produits numériques retournés doivent être dans leur état d'origine.</p>
                    </li>
                    <li>
                        <p>Les remboursements seront émis dans les 14 jours suivant l'approbation de la demande de retour.</p>
                    </li>
                </ul>
                <p>Pour toute question concernant notre politique de retour et de remboursement, veuillez nous contacter à myogi.photo@gmail.com.</p>
            </section>
            <section tabIndex={0} aria-labelledby='section-6' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-6'>6. Confidentialité et Sécurité des Données</h2>
                </header>
                <p>6.1. Le Photographe s'engage à protéger la confidentialité des informations personnelles des Acheteurs conformément à sa politique de confidentialité disponible sur le site web.</p>
            </section>
            <section tabIndex={0} aria-labelledby='section-7' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-7'>7. Limitation de Responsabilité</h2>
                </header>
                <p>7.1. En aucun cas, le Photographe ne sera responsable des dommages indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'incapacité à utiliser les Produits.</p>
            </section>
            <section tabIndex={0} aria-labelledby='section-8' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-8'>8. Loi Applicable et Juridiction Compétente</h2>
                </header>
                <p>8.1. Les présentes Conditions sont régies par les lois de France. Tout litige découlant des présentes Conditions sera soumis à la juridiction exclusive des tribunaux de commerce de Rouen.</p>
            </section>
            <section tabIndex={0} aria-labelledby='section-9' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-9'>9. Responsabilité civile:</h2>
                </header>
                <p>9.1. Le client est responsable de sa propre personne et des personnes mineures qui l’accompagne lors de la séance.<br /><br />
                    Le photographe ne pourra pas être tenue responsable en cas d’accident ou de casse du matériel lors de la séance si celui ci aurait pu être évité. Aucune poursuite judiciaire ne pourra être intentée contre le photographe.<br />
                    En cas de détérioration ou de casse du matériel par le client ou ses enfants, le client devra rembourser au prix du neuf.<br /><br />
                    <strong>Romain MARTIN</strong> se réserve le droit de modifier les présentes conditions générales de vente à tout moment. Les modifications prennent effet immédiatement et seront appliquées même si la réservation a eu lieu antérieurement.
                </p>
            </section>
            <section tabIndex={0} aria-labelledby='section-10' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-10'>10. Réclamations:</h2>
                </header>
                <p>10.1 Toutes les prestations réalisées par le photographe sont soumises à la loi française. Les parties s’engagent, avant toute action judiciaire, à soumettre leur différent au médiateur désigné par les organismes représentatifs des photographes professionnels. Pour toutes les contestations relatives à l’application des présentes conditions générales de vente ou des prestations réalisées par le photographe, il sera fait appel au tribunal compétent pour régler le litige. <br /><br />
                    Le client reconnaît avoir lu ces présentes conditions générales de vente, et les accepter sans limite.
                </p>
            </section>
            <section tabIndex={0} aria-labelledby='section-11' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-11'>11. Style Photographique :</h2>
                </header>
                <p>11.1 Le client déclare connaître et être familier avec le style photographique du photographe et sollicite ses services en toute connaissance du style artistique de celui-ci. <br /><br />
                    Le post-traitement, au même titre que la prise de vue, est propre au photographe et fait partie intégrante de son travail, son style et son univers artistique. Le photographe est le seule à décider du post-traitement qu’il appliquera aux négatifs numériques. Seules les photographies traitées par le photographe seront exploitables par les deux parties. Le client accepte que cette vision soit différente de la sienne.Aucune photographie ne pourra être rejetée en fonction du goût et/ou critère du client. Le choix des images est à la discrétion de Romain MARTIN, il n’y a aucune garantie qu’une image prise pendant la séance, ou exigée par le client soit présente sur votre galerie. Le photographe se réserve le droit de refuser de réaliser une image ne correspondant pas à son style photographique. <br /><br />
                    Aucun fichier brut (raw) ne sera livré au client et ne pourra être exigé. Les fichiers numériques sont livrés au format jpeg haute qualité. <br /><br />
                    La conservation des photographies est garantie pendant 6 mois (sauf catastrophe indépendante de sa volonté telle qu’un DDE défaillant, inondation, incendie ou autres) ; au-delà, le photographe se réserve le droit de les détruire. <br /><br />
                    Les impressions effectuées en dehors d’un laboratoire professionnel pourraient différer en couleurs et en qualité, Romain MARTIN n’est pas responsable des problèmes que vous rencontrerez dans ces cas là. <br /><br />
                    Le client sera averti par mail ou sms lorsque sa galerie sera en ligne (compter entre 2 et 8 semaines).
                </p>
            </section>
            <section tabIndex={0} aria-labelledby='section-12' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-12'>12. Propriété intellectuelle :</h2>
                </header>
                <p>12.1 Conformément à la loi du 11 Mars 1957 sur les droits d’auteur, Romain MARTIN conserve les droits de toutes les images prises pendant une séance et à le droit de reproduction pour ses supports de communication.<br /><br />
                    Même après cession des fichiers numériques, les photographies restent la propriété intellectuelle du photographe et par conséquent, ne sont pas libres de droit. Le droit à l’image du client est quant à lui inaliénable. Un quelconque usage commercial n’est pas autorisé sans l’accord écrit du photographe. <br /><br />
                    Toute utilisation d’une photographie quel qu’en soit l’usage (concours, diffusion, exposition, reproduction, …) faite sans l’accord écrit de  Romain MARTIN constitue un délit de contrefaçon au sens de l’article L-335-2 de ce même code. Les peines encourues peuvent allier jusqu’à 3 ans d’emprisonnement et 300 000€ d’amende.<br /><br />
                    Il est interdit et puni par la loi de numériser des tirages en vue de les publier sur Internet, de retirer par n’importe quel procédé le logo/signature du photographe, et de modifier les photos (conversion en Noir et Blanc, application de filtres, recadrage, retouches diverses, etc…).<br /><br />
                    Pour toute utilisation publique (réseaux sociaux inclus), le client doit obligatoirement citer le nom du photographe.
                </p>
            </section>
            <section tabIndex={0} aria-labelledby='section-13' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-13'>13. Force majeure et Maladie :</h2>
                </header>
                <p>Romain MARTIN se réserve le droit d’annuler une prestation photographique en cas de force majeure ou de maladie. Une telle annulation ne pourra engager ni sa responsabilité, ni donner lieu au versement de dommages et intérêts à quelque titre que ce soit.<br /><br />
                    Le photographe s’engage à reprogrammer la prestation photographique. Est considéré comme force majeures un événement extérieur imprévisible et rendant impossible l’exécution de la prestation (accident, décès, neige, verglas, maladie…). Chacune des parties pourra opposer ce droit dès lors où la force majeure est caractérisée.<br /><br />
                    Le photographe ou le client s’engage à prévenir l’autre partie dans les plus brefs délais par téléphone au 06 60 35 18 97, par mail Myogi.photo@gmail.com ou par message privé Instagram. D’un commun accord, une nouvelle date sera planifiée, sans aucun frais supplémentaire à prestation identique. <br /><br />
                    Toute demande de modification (date, heure, lieu) par le client devra être effectuée au plus tard 15 jours avant la date prévue de la séance, sauf cas de force majeure. Néanmoins le report de la séance devra obligatoirement avoir lieu dans les 30 jours suivant la date prévue pour la séance initiale si le planning du photographe le permet. En cas de report, le photographe ne pourra pas être tenue responsable de la non-réalisation de certaines particularités de séance (saison, météo, cadre de prise de vue…).
                </p>
            </section>
            <section tabIndex={0} aria-labelledby='section-14' className={styles.sections}>
                <header className={styles.sections__header}>
                    <h2 id='section-14'>14. Problème technique :</h2>
                </header>
                <p>En cas de problème technique avec le matériel photographique ou d’un accident quelconque pendant la prestation et empêchant le photographe de réaliser le travail demandé, l’intégralité du montant versé sera remboursée, sans pour autant donner lieu au versement de dommages et intérêts à quelque titre que ce soit. Le client pourra également accepter le report de la séance à une date ultérieure, dans ce cas le montant versé ne sera pas remboursé. Malgré toute l’attention portée aux fichiers numériques, il peut arriver de manière exceptionnelle qu’à la suite d’une séance, par manipulation accidentelle, destruction involontaire, carte mémoire défaillante ou panne informatique, que les sources des photographies soient inexploitables. Dans ce cas, le studio vous offre la possibilité de refaire la séance afin de palier à cet incident indépendant de sa volonté. En cas de refus, le client ne pourra prétendre qu’au remboursement des sommes qu’il a versées, et ce sans aucun dédommagement.</p>
            </section>
            <div className={styles.buttons__container}>
                <Button content={'Mentions légales'} link={'/mentions-legales'} type={'secondary'} />
                <Button content={"Retour à l'accueil"} link={'/'} type={'primary'} />
            </div>
        </main>
    );
};

export default page;