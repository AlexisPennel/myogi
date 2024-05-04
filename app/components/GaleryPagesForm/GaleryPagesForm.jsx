'use client'
import React, { useEffect, useState } from 'react';
import styles from './GaleryPagesForm.module.css';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Loader from '../Loader/Loader';
import Link from 'next/link';
import Image from 'next/image';


const GaleryPagesForm = ({ slug, subDir, photosFiles }) => {
    const router = useRouter();
    const [imatInput, setImatInput] = useState('');
    const [formError, setFormError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [directoriesFiles, setdirectoriesFiles] = useState(null);

    useEffect(() => {
        if (photosFiles) {
            const data = photosFiles[slug];
            const directories = Object.keys(data).map(key => ({
                id: key,
                images: data[key].images
            }));
            console.log(directories)
            setdirectoriesFiles(directories);
        }
    }, [photosFiles]);

    // Expression régulière pour la validation de la plaque
    const plateRegex = /^[A-Z]{2}-[0-9]{3}-[A-Z]{2}$/;

    // Fonction pour valider la plaque d'immatriculation
    const isValidPlate = (plate) => {
        return plateRegex.test(plate);
    }

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Vérifier que l'input n'est pas vide et est valide
        if (imatInput.trim() !== '' && isValidPlate(imatInput)) {
            const pageId = imatInput.trim().toLowerCase();
            router.push(`/galeries/${slug}/${pageId}`);
        } else {
            setFormError(true);
        }
    }

    useEffect(() => {
        if (subDir) {
            setIsLoading(false);
        }
    }, [subDir]);

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className={styles.files__section}>
            <header className={styles.files__section__header}>
                <h2>Les photos du shooting</h2>
            </header>
            <div className={styles.sections}>
                <header>
                    <h3>Recherche par plaque d'immatriculation</h3>
                    <p>Renseignez votre plaque d'immatriculation pour accéder à votre dossier.</p>
                </header>
                <form className={styles.container} onSubmit={handleSubmit}>
                    <div className={styles.input__wrapper}>
                        <label htmlFor="imat">Numéro de plaque</label>
                        <input type="text" id='imat' name='imat' placeholder="Numéro d'immatriculation" onChange={(e) => { setImatInput(e.target.value) }}
                            className={formError ? styles.input__error : styles.input}
                        />
                        <motion.button
                            type='submit'
                            className={styles.submit__button}
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95, y: 1 }}
                        >Rechercher</motion.button>
                    </div>
                    {formError &&
                        <p className={styles.error__message}>Numéro d'immatriculation invalide. <br />Exemple: <span>AA-123-AA</span></p>
                    }
                </form>
            </div>
            <div className={styles.sections}>
                <header>
                    <h3>Recherche par aperçu</h3>
                    <p>Cliquez sur votre photo pour accéder à votre dossier.</p>
                </header>
                <ul className={styles.files__list}>
                    {directoriesFiles.map((dir, index) => (
                        <motion.li key={index} className={styles.list__elements}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}>
                            <Image
                                src={dir.images[0].path}
                                width={480}
                                height={480}
                                alt='photo'
                                className={styles.elements__images} draggable="false"
                                noindex="true"
                                onClick={() => {router.push(`/galeries/${slug}/${dir.id}`)}} />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default GaleryPagesForm;