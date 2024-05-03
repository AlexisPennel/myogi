import React from 'react';
import styles from '../../../page.module.css';
import GaleryPagesPhotoRender from '@/app/components/GaleryPagesPhotoRender/GaleryPagesPhotoRender';

const page = ({ params }) => {
    return (
        <main className={styles.main}>
            <GaleryPagesPhotoRender params={params}/>
        </main>
    );
};

export default page;