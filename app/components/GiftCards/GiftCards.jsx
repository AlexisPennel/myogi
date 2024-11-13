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
            name: "Shooting Animalier",
            slug: 'shooting-animalier',
            path: '/images/cartes/animalier.png',
            price: 150,
            descriptionLarge: "Offrez un shooting photo animalier à un proche pour immortaliser les moments complices avec son chien. Cette séance permettra de capturer les regards, les gestes et les moments de tendresse partagés, créant ainsi des souvenirs uniques à offrir ou à s'offrir.",
        },
        {
            name: "Shooting Automobile",
            slug: 'shooting-automobile',
            path: '/images/cartes/auto.png',
            price: 120,
            descriptionLarge: "Que ce soit pour une voiture de collection ou un modèle récent, cette séance permettra de capturer les détails et la beauté de votre véhicule, créant des souvenirs uniques à offrir ou à s'offrir.",
        },
        {
            name: "Shooting personnalisé",
            slug: 'shooting-personnalise',
            price: 120,
            path: '/images/cartes/perso.png',
            descriptionLarge: "Offrez un shooting photo sur mesure, adapté à vos envies. Que ce soit pour une occasion spéciale ou simplement pour capturer des instants uniques.",
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
                        whileHover={{scale:1.06, rotate:-1}}
                        transition={{delay:0.2}}
                        onClick={() => router.push(`/cartes-cadeaux/${element.slug}`)}
                        viewport={{once:true}}
                    >
                        <Image src={element.path} width={1312} height={2068} alt={`Carte cadeau ${element.name}`} sizes="(max-width: 768px) 40vw, (max-width: 1400px) 20vw, (max-width:2000px) 30vw"/>
                    </motion.div>
                    <div className={styles.cards__body}>
                        <h3>{element.name}</h3>
                        <p className={styles.cardDescription}>{element.descriptionLarge}</p>
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
