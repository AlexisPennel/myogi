'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './GiftCardsCaroussel.module.css';
import Image from 'next/image';
import Link from 'next/link';

const GiftCardsCaroussel = () => {
    const cards = [
        {
            id: 1,
            name: "Shooting Automobile",
            slug: 'cartes-cadeaux/shooting-automobile',
            path: '/images/cartes/auto.png',
            description: "Offrez un shooting photo automobile sur mesure.",
            price: 89,
            normalPrice: 120,
            descriptionLarge: "Offrez un shooting photo automobile sur mesure. Que ce soit pour une voiture de collection ou un modèle récent, cette séance permettra de capturer les détails et la beauté de votre véhicule, créant des souvenirs uniques à offrir ou à s'offrir.",
        },
        {
            id: 2,
            name: "Shooting Animalier",
            slug: '/cartes-cadeaux/shooting-animalier',
            path: '/images/cartes/animalier.png',
            description: "Offrez un shooting photo animalier unique.",
            price: 99,
            normalPrice: 150,
            descriptionLarge: "Offrez un shooting photo animalier à un proche pour immortaliser les moments complices avec son chien. Cette séance permettra de capturer les regards, les gestes et les moments de tendresse partagés, créant ainsi des souvenirs uniques et inoubliables à offrir ou à s'offrir.",
        },
        {
            id: 3,
            name: "Shooting personnalisé",
            slug: 'cartes-cadeaux/shooting-personnalise',
            description: "Offrez un shooting photo sur mesure, adapté à vos envies.",
            price: 89,
            normalPrice: 120,
            path: '/images/cartes/perso.png',
            descriptionLarge: "Offrez un shooting photo sur mesure, adapté à vos envies. Que ce soit pour une occasion spéciale ou simplement pour capturer des instants uniques, cette séance personnalisée saura répondre à vos attentes et créer des souvenirs mémorables.",
        },
    ];
    const [selectedCard, setSelectedCard] = useState(cards[0]);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    return (
        <div className={styles.carouselContainer}>
            {/* Carte principale */}
            <div>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedCard.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href={`${selectedCard.slug}`} className={styles.mainCard}>
                            <Image
                                src={selectedCard.path}
                                alt={selectedCard.name}
                                width={1312}
                                height={2068}
                                className={styles.mainImage}
                                sizes="(max-width: 768px) 30vw, (max-width: 1400px) 30vw, (max-width:2000px) 30vw"
                            />
                        </Link>
                        <div className={styles.priceContainer}>
                            <p className={styles.price}>{selectedCard.price}€</p>
                            <p className={styles.normalPrice}>{selectedCard.normalPrice}€</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Miniatures (sans la carte principale sélectionnée) */}
            <div className={styles.thumbnailContainer}>
                {cards
                    .filter((card) => card.id !== selectedCard.id) // Exclure la carte principale
                    .map((card) => (
                        <motion.div
                            key={card.id}
                            className={styles.thumbnail}
                            onClick={() => handleCardClick(card)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src={card.path}
                                alt={card.name}
                                width={1312}
                                height={2068}
                                className={styles.thumbnailImage}
                                sizes="(max-width: 768px) 30vw, (max-width: 1400px) 30vw, (max-width:2000px) 30vw"
                            />
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};

export default GiftCardsCaroussel;