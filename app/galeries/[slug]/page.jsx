import React from 'react';
import GaleryPagesRender from '@/app/components/GaleryPagesRender/GaleryPagesRender';

const page = async ({ params }) => {
    return (
        <>
            <GaleryPagesRender params={params}/>
        </>
    );
}; 

export default page;