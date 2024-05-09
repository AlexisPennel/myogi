import React from 'react';
import styles from '../../../page.module.css';
import GaleryPagesPhotoRender from '@/app/components/GaleryPagesPhotoRender/GaleryPagesPhotoRender';

export const metadata = {
    title: 'Galeries',
    description: "Galerie photo de votre shooting",
    author: 'Romain Martin',
    creator: 'Romain Martin',
    robots: 'noindex'
};

const page = ({ params }) => {
    return (
        <main className={styles.main}>
            <GaleryPagesPhotoRender params={params}/>
        </main>
    );
};

export default page;