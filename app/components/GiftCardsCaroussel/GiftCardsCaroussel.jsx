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
            name: "Shooting Animalier",
            image: '/images/cartes/animalier.png',
            slug: '/cartes-cadeaux/shooting-animalier',
            price: "150€",
        },
        {
            id: 2,
            name: "Shooting Automobile",
            image: '/images/cartes/auto.png',
            slug: '/cartes-cadeaux/shooting-automobile',
            price: "120€",
        },
        {
            id: 3,
            name: "Shooting Personnalisé",
            image: '/images/cartes/perso.png',
            slug: '/cartes-cadeaux/shooting-personnalise',
            price: "120€",
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
                        initial={{opacity:0, scale:0.8}}
                        animate={{opacity:1, scale:1}}
                        exit={{opacity:0, scale:0.8}}
                        transition={{duration:0.2}}
                    >
                        <Link href={`${selectedCard.slug}`} className={styles.mainCard}>
                            <Image
                                src={selectedCard.image}
                                alt={selectedCard.name}
                                width={1312}
                                height={2068}
                                className={styles.mainImage}
                                sizes="(max-width: 768px) 30vw, (max-width: 1400px) 30vw, (max-width:2000px) 30vw"
                            />
                        </Link>
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
                                src={card.image}
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