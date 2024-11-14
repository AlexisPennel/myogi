import React from 'react';
import GaleryPagesRender from '@/app/components/GaleryPagesRender/GaleryPagesRender';

export const metadata = {
    title: 'Galeries',
    description: "Galerie photo de votre shooting",
    author: 'Romain Martin',
    creator: 'Romain Martin',
    robots: 'noindex'
};


const page = async () => {
    return (
        <>
            <GaleryPagesRender/>
        </>
    );
}; 

export default page;