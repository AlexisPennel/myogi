'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from './GiftCards.module.css';
import { useRouter } from "next/navigation";

const GiftCards = () => {
    const router = useRouter();

    const elementsList = [
        {
            id: 1,
            name: "Shooting Automobile",
            slug: 'shooting-automobile',
            path: '/images/cartes/auto.png',
            description: "Offrez un shooting photo automobile sur mesure.",
            price: 89,
            normalPrice: 120,
            descriptionLarge: "Offrez un shooting photo automobile sur mesure. Que ce soit pour une voiture de collection ou un modèle récent, cette séance permettra de capturer les détails et la beauté de votre véhicule, créant des souvenirs uniques à offrir ou à s'offrir.",
        },
        {
            id: 2,
            name: "Shooting Animalier",
            slug: 'shooting-animalier',
            path: '/images/cartes/animalier.png',
            description: "Offrez un shooting photo animalier unique.",
            price: 99,
            normalPrice: 150,
            descriptionLarge: "Offrez un shooting photo animalier à un proche pour immortaliser les moments complices avec son chien. Cette séance permettra de capturer les regards, les gestes et les moments de tendresse partagés, créant ainsi des souvenirs uniques et inoubliables à offrir ou à s'offrir.",
        },
        {
            id: 3,
            name: "Shooting personnalisé",
            slug: 'shooting-personnalise',
            description: "Offrez un shooting photo sur mesure, adapté à vos envies.",
            price: 89,
            normalPrice: 120,
            path: '/images/cartes/perso.png',
            descriptionLarge: "Offrez un shooting photo sur mesure, adapté à vos envies. Que ce soit pour une occasion spéciale ou simplement pour capturer des instants uniques, cette séance personnalisée saura répondre à vos attentes et créer des souvenirs mémorables.",
        },
    ];



    return (
        <motion.ul className={styles.listContainer}>
            {elementsList.map((element, index) => (
                <motion.li
                    key={index}
                    className={styles.cards}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.06, rotate: -1 }}
                        transition={{ delay: 0.2 }}
                        onClick={() => router.push(`/cartes-cadeaux/${element.slug}`)}
                        viewport={{ once: true }}
                    >
                        <Image src={element.path} width={1312} height={2068} alt={`Carte cadeau ${element.name}`} sizes="(max-width: 768px) 40vw, (max-width: 1400px) 30vw, (max-width:2000px) 30vw" />
                    </motion.div>
                    <div className={styles.cards__body}>
                        <header className={styles.card__header}>
                            <div className={styles.header__nameAndPrice}>
                            <h3>{element.name}</h3>
                            <div className={styles.priceContainer}>
                                <p className={styles.price}>{element.price}€</p>
                                <p className={styles.normalPrice}>{element.normalPrice}€</p>
                            </div>
                            </div>
                                <p className={styles.offer}>Offre de lancement - jusqu'au 01/12/2024</p>
                        <div className={styles.divider}></div>
                        </header>
                        <p className={styles.cardDescription}>{element.descriptionLarge}</p>
                        <div className={styles.divider}></div>
                        <ul className={styles.details}>
                            <li><p>Shooting sur mesure selon vos besoins.</p></li>
                            <li><p>Carte cadeau sans date d'expiration.</p></li>
                            <li><p>Réservez votre date de shooting sur le site ou par message.</p></li>
                        </ul>
                        <div className={styles.divider}></div>
                        <motion.button
                            className={styles.photos__addToCart}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => router.push(`/cartes-cadeaux/${element.slug}`)}
                        >
                            <p>Je choisis cette carte cadeau</p>
                        </motion.button>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default GiftCards;
