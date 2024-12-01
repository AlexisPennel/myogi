'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../page.module.css';
import styles2 from '../page.module.css';
import Image from 'next/image';
import bannerCards from '../../../../public/images/bannerCart-min.webp';
import Button from '@/app/components/Button/Button';
import { useParams } from 'next/navigation';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import Loader from '@/app/components/Loader/Loader';
import { PDFDocument, rgb } from 'pdf-lib';
import autoBanner from '../../../../public/images/cartes/autoBanner-min.webp';
import persoBanner from '../../../../public/images/cartes/persoBanner-min.webp';
import animalBanner from '../../../../public/images/cartes/animalBanner-min.webp';

// Fonction pour détecter si l'utilisateur utilise un navigateur intégré
const isInAppBrowser = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /Instagram|FBAN|FBAV|Twitter/i.test(userAgent);
};

const PaymentComponent = () => {
    const getParams = useParams();
    const slug = getParams.slug;
    const [pageLoading, setPageLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [productBanner, setProductBanner] = useState(animalBanner);
    const [paymentIsLoading, setPaymentIsLoading] = useState(false);
    const [generateButton, setGenerateButton] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isInApp, setIsInApp] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    const elementsList = [
        {
            id: 1,
            name: "Shooting Automobile",
            slug: 'shooting-automobile',
            path: '/images/cartes/auto.png',
            description: "Offrez un shooting photo automobile sur mesure.",
            price: 120,
            normalPrice: 120,
            descriptionLarge: "Offrez un shooting photo automobile sur mesure. Que ce soit pour une voiture de collection ou un modèle récent, cette séance permettra de capturer les détails et la beauté de votre véhicule, créant des souvenirs uniques à offrir ou à s'offrir.",
        },
        {
            id: 2,
            name: "Shooting Animalier",
            slug: 'shooting-animalier',
            path: '/images/cartes/animalier.png',
            description: "Offrez un shooting photo animalier unique.",
            price: 150,
            normalPrice: 150,
            descriptionLarge: "Offrez un shooting photo animalier à un proche pour immortaliser les moments complices avec son chien. Cette séance permettra de capturer les regards, les gestes et les moments de tendresse partagés, créant ainsi des souvenirs uniques et inoubliables à offrir ou à s'offrir.",
        },
        {
            id: 3,
            name: "Shooting personnalisé",
            slug: 'shooting-personnalise',
            description: "Offrez un shooting photo sur mesure, adapté à vos envies.",
            price: 120,
            normalPrice: 120,
            path: '/images/cartes/perso.png',
            descriptionLarge: "Offrez un shooting photo sur mesure, adapté à vos envies. Que ce soit pour une occasion spéciale ou simplement pour capturer des instants uniques, cette séance personnalisée saura répondre à vos attentes et créer des souvenirs mémorables.",
        },
    ];

    useEffect(() => {
        setIsInApp(isInAppBrowser());
    }, [])

    useEffect(() => {
        const product = elementsList.find((element) => element.slug === slug);
        if (product) {
            setProduct(product);
            if (product.name === 'Shooting Animalier') {
                setProductBanner(animalBanner);
            }
            if (product.name === 'Shooting Automobile') {
                setProductBanner(autoBanner);
            }
            if (product.name === 'Shooting personnalisé') {
                setProductBanner(persoBanner);
            }

            setPageLoading(false);
        }
    }, [slug]);

    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "EUR",
        intent: "capture",
    };

    // Fonction pour générer et télécharger le PDF
    const generatePDF = async (orderId) => {
        setIsDownloading(true);
        // Création du document PDF avec une page de format A4
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([595.28, 841.89]); // Dimensions A4 en points (595.28 x 841.89)
        const pageWidth = 595.28;

        // Centrage du texte principal "Carte Cadeau"
        const title = `Carte Cadeau`;
        page.drawText(title, { x: (pageWidth - title.length * 16) / 2, y: 780, size: 32, color: rgb(0.21, 0.30, 0.42) });

        // Chargement et amélioration de la qualité de l'image du produit
        const imageBytes = await fetch(product.path).then((res) => res.arrayBuffer());
        const image = await pdfDoc.embedPng(imageBytes);
        const imageX = (pageWidth - 328) / 2; // Centrer l'image horizontalement
        page.drawImage(image, { x: imageX, y: 200, width: 328, height: 517 });

        // Centrage du prix
        const priceText = `Prix: ${product.price}€`;
        page.drawText(priceText, { x: (pageWidth - priceText.length * 10) / 2, y: 160, size: 20 });

        // Centrage du numéro de carte
        const orderText = `Numéro de carte: ${orderId}`;
        page.drawText(orderText, { x: (pageWidth - orderText.length * 10) / 2, y: 130, size: 20 });

        // Ajustement précis du texte pour la réservation, centré horizontalement
        const instructionText = "Pour réserver votre créneau de shooting, rendez-vous sur:";
        page.drawText(instructionText, { x: 120, y: 80, size: 13, color: rgb(0.4, 0.4, 0.4) });

        const linkText = 'www.myogiphotographie.fr/cartes-cadeaux';
        page.drawText(linkText, { x: 160, y: 60, size: 13, color: rgb(0.21, 0.30, 0.42) });

        // Sauvegarde et téléchargement du PDF
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `Carte-cadeau-${product.slug}.pdf`;
        link.click();
        setIsDownloading(false);
    };

    if (pageLoading || paymentIsLoading) {
        return <Loader />;
    }
    return (
        <>
            <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                <Image
                    src={productBanner}
                    width={1080}
                    height={1620}
                    sizes="(min-width: 1200px) 50vw, 100vw"
                    priority
                    className={styles.hero__section__banner}
                    alt={`Photo de la carte cadeau ${product.name}`}
                    tabIndex={-1}
                    noindex="true"
                    draggable="false" />
                <div className={styles.hero__section__contentWrapper}>
                    <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">Carte cadeau<br /><span>{product.name}</span></h1>
                    <p className={styles.contentWrapper__description} tabIndex={0}>{product.descriptionLarge}</p>
                </div>
            </section>
            <section className={styles2.section__container}>
                {isInApp && (
                    <div className={styles2.notification}>
                        <p className={styles2.notification__text}>Pour acheter votre carte cadeau, veuillez ouvrir cette page dans votre navigateur web. <br /><br />
                            Appuyez sur les trois points verticaux en haut à droite de l'écran, puis sélectionnez "Ouvrir dans le navigateur"</p>
                    </div>
                )}
                <Image src={product.path} width={1312} height={2068} sizes="(max-width: 768px) 60vw, (max-width: 1400px) 40vw, (max-width:2000px) 30vw" alt='Photo carte cadeau Myogi' className={styles2.cardImage} />
                <div className={styles2.product__body}>
                    <div className={styles2.product__container}>
                        <header className={styles2.product__header}>
                            <h2 className={styles2.product__description}>{product.name}</h2>
                            <div className={styles2.priceContainer}>
                                <p className={styles2.price}>{product.price}€</p>
                                {/* <p className={styles2.normalPrice}>{product.normalPrice}€</p> */}
                            </div>
                        </header>
                        {/* <p className={styles2.offer}>Offre de lancement – Jusqu'au 01/12/2024</p> */}
                        <p>Payez votre carte cadeau en ligne et recevez-la instantanément en format PDF imprimable, prête à offrir !</p>
                        <div className={styles2.divider}></div>
                        <p className={styles2.infos}>Le téléchargement de votre carte cadeau se lancera automatiquement une fois le paiement confirmé.
                            Si vous rencontrez un problème, n'hésitez pas à me contacter et la carte cadeau vous sera envoyée par email dans les plus brefs délais.</p>
                    </div>
                    {generateButton &&
                        <>
                            <p>Merci pour votre achat !</p>
                            {isDownloading ?
                                <Loader />
                                :
                                <Button content={'Télécharger la carte cadeau'} type={'action'} action={() => { generatePDF(orderId) }} />
                            }
                        </>
                    }
                    <div className={styles2.buttons__container}>
                        {!generateButton &&
                            < div className={styles2.paypal__button__container}>
                                <PayPalScriptProvider options={initialOptions}>
                                    <PayPalButtons
                                        style={{ layout: "vertical", color: 'blue' }}
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [{
                                                    amount: {
                                                        value: `${product.price}`, // Total de la commande
                                                        currency_code: "EUR",
                                                        breakdown: {
                                                            item_total: {
                                                                currency_code: "EUR",
                                                                value: `${product.price}`, // Assurez-vous que cela correspond bien au prix de l'article
                                                            },
                                                        },
                                                    },
                                                    items: [{
                                                        name: product.name,
                                                        unit_amount: {
                                                            currency_code: "EUR",
                                                            value: `${product.price}`, // Prix unitaire de l'article
                                                        },
                                                        quantity: "1",
                                                        description: `${product.name}`,
                                                        category: "DIGITAL_GOODS",
                                                    }],
                                                    application_context: {
                                                        shipping_preference: "NO_SHIPPING",
                                                    },
                                                }],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then((details) => {
                                                setPaymentIsLoading(true);
                                                console.log(details);

                                                // Accéder au numéro de transaction dans 'captures'
                                                const capture = details.purchase_units[0].payments.captures[0];
                                                const transactionId = capture.id;  // Le numéro de transaction PayPal

                                                if (capture.status === "COMPLETED") {
                                                    console.log('Paiement réussi');
                                                    setOrderId(transactionId);  // Utiliser le numéro de transaction ici
                                                    setGenerateButton(true);
                                                    setPaymentIsLoading(false);
                                                    generatePDF(transactionId);  // Passer le numéro de transaction au PDF
                                                }
                                            });
                                        }}
                                        onError={(err) => {
                                            console.error("Erreur PayPal:", err);
                                        }}
                                    />

                                </PayPalScriptProvider>
                            </div>
                        }
                        <div className={styles2.divider}></div>
                        <div className={styles2.backButtons__container}>
                            <Button content={'Retour cartes cadeaux'} link={'/cartes-cadeaux'} type={'primary'} />
                            <Button content={"Retour à l’accueil"} link={'/'} type={'secondary'} />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default PaymentComponent;