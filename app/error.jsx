'use client' // Error components must be Client Components

import { useEffect } from 'react'
import styles from './error.module.css';
import Button from './components/Button/Button';

export const metadata = {
    title: "Erreur",
    description: "Vous êtes sur une page qui semble ne pas exister sur mon site. Il se peut que l'URL soit incorrecte, que la page ait été déplacée ou supprimée. Mais ne vous inquiétez pas, vous pouvez retourner à la page d'accueil pour continuer à explorer mes services",
    author: 'Romain Martin',
    creator: 'Romain Martin',
    robots: 'noindex'
  };


export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    const handleReset = () => {
        reset()
    }
    return (
        <section className={styles.main}>
            <header className={styles.header}>
                <h1>Une erreur est survenue</h1>
                <p>Réessayer de charger la page ou retourner sur la page d'accueil</p>
            </header>
            <div className={styles.buttons__container}>
                <div className={styles.resetButton} onClick={handleReset}>    
                    <p>Recharger la page</p>
                </div>
                <Button content={"Retour page d'accueil"} link={'/'} type={'primary'} size={'large'} />
            </div>
        </section>
    )
}