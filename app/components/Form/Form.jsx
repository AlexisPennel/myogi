'use client'
import React, { useRef, useState } from 'react';
import styles from './Form.module.css';
import success from '../../../public/icons/success.svg';
import error from '../../../public/icons/error.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Form = () => {
    const contactRef = useRef();
    const [isSend, setIsSend] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Gestionnaire d'événement pour la soumission du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche la soumission par défaut
        setIsLoading(true);

        const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if (!emailRegex.test(event.target.email.value)) {
            setIsError(true);
            setIsLoading(false);
            return;
        }

        if (event.target.message.value.trim() === '') {
            setIsError(true);
            setIsLoading(false);
            return
        }

        const formData = {
            'entry.925490757': event.target.email.value.trim(), // Clé pour l'email
            'entry.464257582': event.target.message.value.trim(), // Clé pour le message
        };


        const formBody = new URLSearchParams(formData).toString();

        try {
            await fetch('https://docs.google.com/forms/u/1/d/e/1FAIpQLSeEkq0cS0FYXxX7Fv0yF6FFL5ycnbmut_Rq9MuQHRE_0BZlmg/formResponse', {
                method: 'POST',
                mode: 'no-cors', // Important pour éviter les problèmes liés au CORS
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody,
            });

            // Ici, vous pouvez gérer ce qui se passe après l'envoi réussi (par ex. afficher un message de confirmation)
            setIsSend(true);
            setIsLoading(false);
            event.target.email.value = '';
            event.target.message.value = '';
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
            console.error('Erreur lors de l\'envoi du formulaire :', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container} ref={contactRef}>
            <div className={styles.responsive__wrapper}>
                <div className={styles.input__wrapper}>
                    <label htmlFor="nom">Nom </label>
                    <input type="text" id="nom" name='nom' className={styles.email__input} autoComplete='on' placeholder='Nom' />
                </div>

                <div className={styles.input__wrapper}>
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id="prenom" name='prenom' className={styles.email__input} autoComplete='on' placeholder='Prénom' />
                </div>
            </div>
            <div className={styles.responsive__wrapper}>
                <div className={styles.input__wrapper}>
                    <label htmlFor="telephone">Téléphone</label>
                    <input type="tel" id="telephone" name='telephone' className={styles.email__input} autoComplete='on' placeholder='Téléphone' />
                </div>
                <div className={styles.input__wrapper}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name='email' className={styles.email__input} autoComplete='on' placeholder='Email' />
                </div>
            </div>

            <div className={styles.input__wrapper}>
                <label htmlFor="message">Message - Description du projet</label>
                <textarea name="message" id="message" className={styles.text__input} placeholder='Message - Description du projet' />
            </div>
            <motion.button type="submit" className={styles.submit__button} tabIndex={0} aria-label='Envoyer le formulaire'
                whileTap={{ scale: 0.9 }}
                whileHover={{scale:1.05, y:-2}}>
                {isLoading ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>
            {isSend &&
                <div className={styles.popUp__wrapper} onClick={() => { setIsSend(false) }}>
                    <div className={styles.popUp__container}>
                        <Image src={success} width={60} height={60} alt='Icone succes' aria-hidden='true' />
                        <p tabIndex={0}>Un e-mail vous sera envoyé prochainement </p>
                    </div>
                </div>
            }
            {isError &&
                <div className={styles.popUp__wrapper} onClick={() => { setIsError(false) }}>
                    <div className={styles.popUp__container}>
                        <Image src={error} width={60} height={60} alt='Icone succes' aria-hidden='true' />
                        <p tabIndex={0}>Les champs du formulaire sont manquants ou incorrects. </p>
                    </div>
                </div>
            }
        </form>
    );
};

export default Form;
