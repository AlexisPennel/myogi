'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../page.module.css';
import bannerHome from '../../../public/images/bannerHome-min.webp';
import Button from '../Button/Button';
import Image from 'next/image';
import Loader from '../Loader/Loader';
import GaleryPagesPhotos from '../GaleryPagesPhotos/GaleryPagesPhotos';
import { useParams } from 'next/navigation';

const GaleryPagesPhotoRender = () => {
    const params = useParams();
    const slug = params.slug;
    const [pageTitle, setPageTitle] = useState();
    const [pageId, setPageId] = useState();
    const [jsonList, setJsonList] = useState(null);
    const [galleryPhotos, setGalleryPhotos] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        if (params) {
            const parts = slug.split('-');
            parts.splice(-3);
            const title = parts.join('-');
            const id = params.id
            setPageTitle(title);
            setPageId(id);
            setPageLoading(false);
        }
    }, [params]);


    // Fetch photos datas *************************************
    useEffect(() => {
        document.addEventListener("contextmenu", (e) => e.preventDefault(), false);
        window.addEventListener('pagehide', () => document.body.style.opacity = 0);
        fetch('/galleriesList.json')
            .then(res => res.json())
            .then(data => {
                setJsonList(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (jsonList) {
            const gallery = jsonList[slug][pageId];
            if (gallery) {
                setGalleryPhotos(gallery.images || []);
            } else {
                console.log(`Aucune galerie trouvée avec le slug : ${slug}`);
                setGalleryPhotos(false);
            }
        }
    }, [jsonList, slug]);


    useEffect(() => {
        if (galleryPhotos !== null) {
            setPageLoading(false);
        }
    }, [galleryPhotos])
    //  ****************************************************

    return (
        <main className={styles.main}>
            {!pageLoading ?
                <>
                    <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                        <Image src={bannerHome} width={720} height={1280} sizes="(min-width: 1200px) 40vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                        <div className={styles.hero__section__contentWrapper}>
                            <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">{pageTitle}<br /><span>{pageId}</span></h1>
                            <p className={styles.contentWrapper__description} tabIndex={0}>Plongez dans l'univers de vos propres shootings grâce à un espace dédié où chaque moment capturé vous attend. Sur cette page, vous avez la liberté de sélectionner vos clichés préférés et l'opportunité d'acquérir ces souvenirs tangibles.</p>
                            <div className={styles.contentWrapper__buttonsContainer}>
                                <Button type={'primary'} size={'large'} content={'Les photos du shooting'} scrollId={'#photosSection'} />
                            </div>
                        </div>
                    </section>
                    <GaleryPagesPhotos photos={galleryPhotos} params={params} />
                </>
                :
                <Loader />
            }
        </main>
    );
};

export default GaleryPagesPhotoRender;