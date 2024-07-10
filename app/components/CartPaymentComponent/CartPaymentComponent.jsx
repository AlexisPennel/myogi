'use client'
import React, { useContext, useEffect, useState } from 'react';
import styles from '../CartComponent/CartComponent.module.css';
import styles2 from './CartPaymentComponent.module.css';
import Loader from '../Loader/Loader';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from 'next/link';
import { validate as isValidUuid } from 'uuid';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/app/CartContext';
import Button from '../Button/Button';

const CartPaymentComponent = ({ id }) => {
    const blurDataUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c2NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiI+PC9mZUdhdXNzaWFuQmx1cj48L3JlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0icmdiYSgwLDAsMCwwLjUpIiBmaWx0ZXI9InVybCgjYikiIC8+PC9zdmc+";
    const router = useRouter();
    const { cart, setCart, downloadFilesPaid, setDownloadFilesPaid } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [pageLoading, setPageLoading] = useState(true);
    const [downloadNotif, setDownloadNotif] = useState(false);

    // Pat pal ******************************
    const [paymentIsLoading, setPaymentIsLoading] = useState(false);

    //  Verification id
    useEffect(() => {
        if (id) {
            if (!isValidUuid(id)) {
                router.push('/');
                return;
            }
            setPageLoading(false);
        }
    }, [id]);

    // PayPal **************************
    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "EUR",
        intent: "capture",
    };

    // Calcul total du panier
    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + item.price, 0));
    }, [cart]);

    if (pageLoading || paymentIsLoading) {
        return <Loader />
    }

    return (
        <section className={styles.container}>
            {cart.length === 0 &&
                <>
                <p>Votre panier est vide</p>
                </>
                }
            {downloadNotif && 
                <div className={styles2.downloadNotif}>
                    <p>Merci pour votre achat !</p>
                    <Button type={'primary'} link={'/telechargement'} size={'large'} content={'Télécharger mes photos'} />
                </div>
            }
            <ul className={styles.cartItems__list}>
                {cart.map((photo, index) => (
                    <li key={index} className={styles.cartItems__li} onContextMenu={(event) => event.preventDefault()}>
                        <div className={styles.cartItems__wrapper}>
                            <div className={styles.photoAndRemove__wrapper}>
                                <Image src={photo.path}
                                    width={80}
                                    height={80}
                                    alt='photo'
                                    noindex="true"
                                    className={styles.cartItems__photos}
                                    draggable="false"
                                    quality={50}
                                    placeholder='blur'
                                    blurDataURL={blurDataUrl} />
                            </div>
                            <span className={styles.cartItems__price}>{photo.price}€</span>
                        </div>
                        <div className={styles.line}></div>
                    </li>
                ))}
            </ul>
            <div className={styles.payment__container}>
                <div className={styles.price}>
                    <p className={styles.price__totalText}>TOTAL</p>
                    <p className={styles.price__total}>{total}€</p>
                </div>
                <div className={styles2.paypal__button__container}>
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                            style={{ layout: "vertical", color: 'blue' }}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: `${total}`, // Total de la commande
                                            breakdown: {
                                                item_total: { value: `${total}`, currency_code: "EUR" }, // Assurez-vous que cela correspond au total de la commande
                                            },
                                        },
                                        items: cart.map((photo, index) => ({
                                            name: photo.path, // Nom de la photo, adapté si nécessaire
                                            unit_amount: {
                                                currency_code: "EUR",
                                                value: photo.price, // Prix unitaire de la photo
                                            },
                                            quantity: "1", // Quantité
                                            description: "Photo numérique", // Description optionnelle
                                            category: "DIGITAL_GOODS", // Catégorie pour les biens numériques
                                        })),
                                        application_context: {
                                            shipping_preference: "NO_SHIPPING", // Pas d'expédition nécessaire pour des biens numériques
                                        }
                                    }],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    setPaymentIsLoading(true);
                                    if (details.purchase_units[0].payments.captures[0].status === "COMPLETED") {
                                        setPaymentIsLoading(false);
                                        setDownloadNotif(true);
                                        setDownloadFilesPaid([...downloadFilesPaid, ...cart]);
                                        setCart([]);
                                        setTimeout(() => {
                                            router.push('/telechargement');
                                        }, 2000);
                                    }
                                });
                            }}
                            onError={(err) => {
                                console.error("Erreur PayPal:", err);
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
                <p className={styles.payment__helpMessage}>Si vous rencontrez un problème lors de votre achat, veuillez me contacter à l'adresse suivante : <Link href={"mailto:myogi.photo@gmail.com"}>myogi.photo@gmail.com</Link></p>
                <div className={styles2.line}></div>
                <div className={styles.buttons__container}>
                    <motion.button onClick={() => { router.push('/panier') }} className={styles2.backButton}
                        whileHover={{ scale: 1.03, color: "var(--neutrals-300)", border: "2px solid var(--neutrals-300)" }}
                        whileTap={{ scale: 0.95, color: "var(--neutrals-300)", border: "2px solid var(--neutrals-300)" }}>
                        Modifier le panier
                    </motion.button>
                    <motion.button className={styles.conditions__button}>
                        <Link href='/conditions-generales-de-vente'>
                            Conditions générales de vente
                        </Link>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default CartPaymentComponent;