'use client'
import React from 'react'
import styles from './ServicesCards.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button/Button'

import service01 from '../../../public/images/services/01-min.webp';
import service02 from '../../../public/images/services/02-min.webp';
import service03 from '../../../public/images/services/03-min.webp';
import service04 from '../../../public/images/services/04-min.webp';
import service05 from '../../../public/images/services/05-min.webp';
import service06 from '../../../public/images/services/06-min.webp';
import service07 from '../../../public/images/services/07-min.webp';
import service08 from '../../../public/images/services/08-min.webp';
import service09 from '../../../public/images/services/09-min.webp';
import Script from 'next/script'


const services = [
    {
        id: 'animalier',
        title: 'Shooting Animalier',
        description: "Je sublime votre compagnon dans un cadre naturel, urbain ou atypique, avec un regard artistique qui lui donne toute sa grandeur. Chaque séance est pensée pour révéler sa beauté, sa personnalité, et créer des images uniques, sensibles et pleines de vie.",
        image: service01,
        link: '/shooting-animalier',
        alt: "Photo d'un chien Akita Inu blanc photographié par Romain Martin",
        index: "false"

    },
    {
        id: 'mini-animalerie',
        title: 'Mini séances photo en animalerie',
        description: "Des portraits express, pleins de charme. En collaboration avec des animaleries partenaires, je vous propose des séances photo en magasin, sur fond studio ou décor travaillé. Une photo offerte, les autres disponibles à l’achat en ligne : une belle occasion de découvrir mon univers et d’immortaliser votre animal dans une ambiance conviviale et professionnelle.",
        image: service02,
        // link: '/mini-seances-animalerie',
        alt: "Mini séance photo en animalerie par Romain Martin",
        index: "false"

    },
    {
        id: 'auto',
        title: 'Shooting Automobile',
        description: "Votre véhicule comme vous ne l’avez jamais vu. En ville, en pleine nature ou dans des décors industriels, je mets en scène chaque ligne, chaque détail, pour des clichés percutants et esthétiques.",
        image: service03,
        link: '/shooting-automobile',
        alt: "Photo d'une Porsche Cayman GTS grise photographié par Romain Martin",
        index: "false"

    },
    {
        id: 'personnel',
        title: 'Shooting Personnel',
        description: "Un moment rien que pour vous. Ce shooting 100% personnalisé met en lumière votre personnalité, votre style et vos envies. Prenons le temps de capturer des portraits qui vous ressemblent, puissants et authentiques.",
        image: service04,
        alt: "Portrait personnalisé capturé par Romain Martin à Rouen",
        index: "false"

    },
    {
        id: 'famille',
        title: 'Shooting Famille',
        description: "Des instants précieux, figés pour toujours. En famille, entre générations ou avec vos enfants, créons ensemble des souvenirs sincères et chaleureux, dans une ambiance détendue et naturelle.",
        image: service05,
        alt: "Photo de famille photographiée par Romain Martin, photographe professionnel à Rouen",
        index: "true"
    },
    {
        id: 'pro',
        title: 'Shooting Professionnel',
        description: "Valorisez votre image et votre activité. En studio ou sur le terrain, seul(e) ou avec votre équipe, je vous accompagne pour créer des portraits professionnels et des mises en scène authentiques de votre savoir-faire.",
        image: service06,
        alt: "Portrait professionnel capturé par Romain Martin, photographe à Rouen",
        index: "false"
    },
    {
        id: 'immobilier',
        title: 'Shooting Immobilier',
        description: "Sublimez votre bien immobilier. Grâce à une mise en lumière professionnelle, je valorise chaque espace pour rendre vos annonces plus attractives, captant l’attention dès le premier regard.",
        image: service07,
        alt: "Photo de bien immobilier sublimé par le photographe Romain Martin",
        index: "false"

    },
    {
        id: 'mariage',
        title: 'Photographie de Mariage',
        description: "Raconter votre histoire en images. Des préparatifs à la soirée, je capture chaque émotion, chaque regard complice, pour vous offrir des souvenirs sincères, élégants et intemporels de ce jour unique.",
        image: service08,
        alt: "Photo de mariage réalisée par Romain Martin, photographe à Rouen",
        index: "false"

    },
    {
        id: 'evenement',
        title: 'Reportage Événementiel',
        description: " Faites revivre vos événements à travers des images vivantes et authentiques. Que ce soit un afterwork, un anniversaire, un concert ou un festival, je capture l’ambiance, les instants forts, les émotions et les détails qui font toute la richesse de votre événement. Un reportage complet et sur mesure, fidèle à votre atmosphère.",
        image: service09,
        alt: "Photo d’événement professionnel capturée par Romain Martin, photographe à Rouen",
        index: "false"

    },
]

const ServicesCards = () => {
    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": services.map((service) => ({
                            "@type": "Service",
                            "name": service.title,
                            "description": service.description,
                            "image": `https://www.myogiphotographie.fr/_next/image?url=%2Fimages%2Fservices%2F${service.image.src.split('/').pop()}&w=1200&q=75`,
                            ...(service.link && {
                                "url": `https://www.myogiphotographie.fr${service.link}`,
                            }),
                            "provider": {
                                "@type": "Person",
                                "name": "Romain Martin",
                                "jobTitle": "Photographe professionnel",
                                "url": "https://www.myogiphotographie.fr"
                            },
                            "areaServed": {
                                "@type": "Place",
                                "name": "Rouen"
                            },
                            "availableChannel": {
                                "@type": "ServiceChannel",
                                "availableLanguage": ["Français"]
                            }
                        })),
                    }),
                }}
            />


            <ul className={styles.list__container}>
                {services.map((service) => (
                    <li
                        key={service.id}
                        className={styles.list__cards}
                        aria-labelledby={`${service.id}Title`}
                        tabIndex={0}
                        id={service.id}
                    >
                        <motion.div className={styles.cards__imageContainer}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            viewport={{ once: true }}

                        >
                            <Image
                                src={service.image}
                                width={1280}
                                height={720}
                                alt={service.alt}
                                className={styles.imageContainer__image}
                                placeholder='blur'
                                sizes='(min-width:768px) 35vw, (min-width:1200px) 25vw, (min-width:1700px) 20vw, 100vw'
                                draggable="false"
                                onContextMenu={(event) => event.preventDefault()}
                                noindex={service.index}
                            />
                        </motion.div>
                        <div className={styles.responsive__wrapper}>
                            <div className={styles.cards__content}>
                                <h3 tabIndex={0} id={`${service.id}Title`}>{service.title}</h3>
                                <p tabIndex={0}>{service.description}</p>
                            </div>
                            {service.link ?
                                <div className={styles.cards__buttonContainer}>
                                    <Button type={'primary'} content={'En savoir plus'} link={service.link} />
                                    <Button type={'secondary'} content={'Me contacter'} link={'#contact'} />
                                </div>
                                :
                                <div className={styles.cards__buttonContainer}>
                                    <Button type={'secondary'} content={'Me contacter'} link={'#contact'} />
                                </div>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ServicesCards
