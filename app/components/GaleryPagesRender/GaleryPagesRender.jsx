'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../page.module.css';
import styles2 from './GaleryPagesRender.module.css';
import Image from 'next/image';
import Button from '../Button/Button';
import bannerHome from '../../../public/images/bannerHome-min.webp';
import Loader from '../Loader/Loader';
import Link from 'next/link';
import GaleryPagesForm from '../GaleryPagesForm/GaleryPagesForm';
import GaleryPagesPhotos from '../GaleryPagesPhotos/GaleryPagesPhotos';
import { useParams } from 'next/navigation';


const GaleryPagesRender = () => {
    const getParams = useParams();
    const slug = getParams.slug;
    const [pageTitle, setPageTitle] = useState();
    const [pageDate, setPageDate] = useState();
    const [pageLoading, setPageLoading] = useState(true);
    const [jsonList, setJsonList] = useState(null);
    const [galleryPhotos, setGalleryPhotos] = useState(null);
    const [subDirectories, setSubDirectories] = useState([]);

    useEffect(() => {
        if (slug) {
            const parts = slug.split('-');
            const dateParts = parts.splice(-3);
            const title = parts.join('-');
            const date = dateParts.join('-');
            setPageTitle(title);
            setPageDate(date);
        }
    }, [slug]);

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
            const gallery = jsonList[slug];
            if (gallery) {
                setGalleryPhotos(gallery.images || []);
                setSubDirectories(Object.keys(gallery).filter(key => key !== 'images'));
            } else {
                console.log(`Aucune galerie trouvée avec le slug : ${slug}`);
                setGalleryPhotos(false);
            }
        }
    }, [jsonList, slug]);


    useEffect(() => {
        console.log(galleryPhotos)
        if (galleryPhotos !== null) {
            setPageLoading(false);
        }
    }, [galleryPhotos])

    return (
        <main className={styles.main}>
            {!pageLoading ?
                <>
                    <section className={styles.hero__section} tabIndex={0} aria-labelledby="pageTitle">
                        <Image src={bannerHome} width={720} height={1280} sizes="(min-width: 1200px) 40vw, 100vw" priority className={styles.hero__section__banner} alt="Photo du photographe Myogi, d'une BMW M4" tabIndex={-1} placeholder="blur" noindex="true" draggable="false" />
                        <div className={styles.hero__section__contentWrapper}>
                            <h1 className={styles.contentWrapper__title} tabIndex={0} id="pageTitle">{pageTitle}<br /><span>{pageDate}</span></h1>
                            <p className={styles.contentWrapper__description} tabIndex={0}>Plongez dans l'univers de vos propres shootings grâce à un espace dédié où chaque moment capturé vous attend. Sur cette page, vous avez la liberté de sélectionner vos clichés préférés et l'opportunité d'acquérir ces souvenirs tangibles.</p>
                            <div className={styles.contentWrapper__buttonsContainer}>
                                <Button type={'primary'} size={'large'} content={'Les photos du shooting'} scrollId={'#photosSection'} />
                            </div>
                        </div>
                    </section>
                    {galleryPhotos === false &&
                        <p className={styles2.notFound__message}>Galerie inexistante ou supprimée. Verifiez que l'URL soit bien correcte. <br /><Link href={"mailto:myogi.photo@gmail.com"}>Contactez Myogi</Link> en cas de problème.</p>
                    }
                    {subDirectories.length > 0 &&
                        <GaleryPagesForm slug={slug} subDir={subDirectories} photosFiles={jsonList} />
                    }
                    {galleryPhotos.length > 0  &&
                        <div>
                            <GaleryPagesPhotos photos={galleryPhotos} params={params}/>
                        </div>
                    }
                </>
                :
                <Loader />
            }
        </main>
    );
};

export default GaleryPagesRender;
