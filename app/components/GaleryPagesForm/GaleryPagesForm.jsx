'use client'
import React, { useEffect, useState } from 'react';
import styles from './GaleryPagesForm.module.css';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Loader from '../Loader/Loader';


const GaleryPagesForm = ({ slug, subDir }) => {
    const router = useRouter();
    const [imatInput, setImatInput] = useState('');
    const [formError, setFormError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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
            {/* <ul className={styles.files__list}>
                {subDir.map(dir => (
                    <motion.li key={dir}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95, y: 1 }}>
                        <Link href={`/galeries/${slug}/${dir}`}>
                            <Image src={file} width={144} height={114} alt='Illustration dossier' />
                            <h3>{dir}</h3>
                        </Link>
                    </motion.li>
                ))}
            </ul> */}
        </section>
    );
};

export default GaleryPagesForm;