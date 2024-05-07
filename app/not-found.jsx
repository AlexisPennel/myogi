import React from 'react';
import styles from './not-found.module.css';
import Button from './components/Button/Button';


export const metadata = {
    title: "404 - Page introuvable",
    description: "Vous êtes sur une page qui semble ne pas exister sur mon site web. Il se peut que l'URL soit incorrecte, que la page ait été déplacée ou supprimée.",
    author: 'Romain Martin',
    creator: 'Romain Martin',
};

const NotFound = () => {
  return (
    <section className={styles.main}>
      <header className={styles.header}>
        <h1>Ouuups...</h1>
        <p>La page que vous cherchez n'existe pas ou a été supprimée du site.</p>
      </header>
        <Button link={'/'} content={'Retour sur le site'} type={'primary'} />
      <div className={styles.button__container}>
      </div>
    </section>
  );
};

export default NotFound;