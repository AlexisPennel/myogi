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
    const [errorMessage, setErrorMessage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Gestionnaire d'événement pour la soumission du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche la soumission par défaut
        setIsLoading(true);
        setErrorMessage([]);

        // Retrait des erreurs
        document.getElementById('nom').classList.remove(`${styles.input__error}`);
        document.getElementById('prenom').classList.remove(`${styles.input__error}`);
        document.getElementById('telephone').classList.remove(`${styles.input__error}`);
        document.getElementById('email').classList.remove(`${styles.input__error}`);
        document.getElementById('message').classList.remove(`${styles.input__error__message}`);


        const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;


        const inputsCheck = () => {
            let isError = false;

            if (event.target.nom.value.trim() === '') {
                isError = true;
                document.getElementById('nom').classList.add(`${styles.input__error}`);
                setErrorMessage(prevValue => [...prevValue, "Le champ Nom est obligatoire."]);
            }

            if (event.target.prenom.value.trim() === '') {
                isError = true;
                document.getElementById('prenom').classList.add(`${styles.input__error}`);
                setErrorMessage(prevValue => [...prevValue, "Le champ Prénom est obligatoire."]);

            }

            if (!phoneRegex.test(event.target.telephone.value.trim())) {
                isError = true;
                document.getElementById('telephone').classList.add(`${styles.input__error}`);
                setErrorMessage(prevValue => [...prevValue, "Le numéro de téléphone est obligatoire et ne doit pas comporter d'espaces."]);

            }

            if (!emailRegex.test(event.target.email.value.trim())) {
                isError = true;
                document.getElementById('email').classList.add(`${styles.input__error}`);
                setErrorMessage(prevValue => [...prevValue, "L'e-mail est obligatoire et doit être valide."]);

            }
    
            if (event.target.message.value.trim() === '') {
                isError = true;
                document.getElementById('message').classList.add(`${styles.input__error__message}`);
                setErrorMessage(prevValue => [...prevValue, "Le champ Message est obligatoire."]);

            }

            return isError
        }

        if (inputsCheck()) {
            setIsLoading(false);
            setIsError(true);
            return
        };

        const formData = {
            'entry.890176486': event.target.nom.value.trim(),
            'entry.2132663297': event.target.prenom.value.trim(),
            'entry.144889396': event.target.telephone.value.trim(),
            'entry.1647875538': event.target.email.value.trim(),
            'entry.1660424353': event.target.message.value.trim()
        };

        const formBody = new URLSearchParams(formData).toString();

        try {
            await fetch('https://docs.google.com/forms/u/1/d/e/1FAIpQLSd9qcBuH8-axgWmHqf9SUClzFIW1uH6NKV6CP4os0LQHFoNmA/formResponse', {
                method: 'POST',
                mode: 'no-cors', // Important pour éviter les problèmes liés au CORS
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody,
            });

            // Gestion du succès de l'envoi
            setIsSend(true);
            setIsLoading(false);
            event.target.nom.value = '';
            event.target.prenom.value = '';
            event.target.telephone.value = '';
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
            {errorMessage.length > 0 && 
                <ul className={styles.errorMessage__list}>
                    {errorMessage.map((message, index) => (
                        <li key={index}>
                            <p>{message}</p>
                        </li>
                    ))}
                </ul>
            }
            <motion.button type="submit" className={styles.submit__button} tabIndex={0} aria-label='Envoyer le formulaire'
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05, y: -2 }}>
                {isLoading ? 
                <div className={styles.loader__container}>
                    <span className={styles.loader}></span>
                </div>
                : 
                'Reserver mon shooting'}
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
