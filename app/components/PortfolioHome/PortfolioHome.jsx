'use client'
import React, { useEffect, useState } from 'react';
import styles from './PortfolioHome.module.css';
import Image from 'next/image';
import PortfolioHomeLoading from './PortfolioHomeLoading';

const PortfolioHome = () => {
    const [jsonList, setJsonList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        }, false);

        window.addEventListener('pagehide', () => {
            document.body.style.opacity = 0
        })

        fetch('/PortfolioHomeImagesList.json')
            .then(res => res.json())
            .then(data => {
                setJsonList(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            {isLoading &&
                <PortfolioHomeLoading />
            }
            <div className={styles.container}>
                {jsonList !== null &&
                    <>
                        <div className={styles.container1}>
                            <Image src={jsonList.PortfolioHome[0]} width={1920} height={1080} alt='Photo de Myogi' noindex tabIndex={0} />
                        </div>
                        <div className={styles.container2}>
                            <Image src={jsonList.PortfolioHome[1]} width={1920} height={1080} alt='Photo de Myogi' noindex tabIndex={0} />
                        </div>
                        <div className={styles.container3}>
                            <Image src={jsonList.PortfolioHome[2]} width={1920} height={1080} alt='Photo de Myogi' noindex  tabIndex={0}/>
                        </div>
                        <div className={styles.container4}>
                            <Image src={jsonList.PortfolioHome[3]} width={1920} height={1080} alt='Photo de Myogi' noindex  tabIndex={0}/>
                        </div>
                        <div className={styles.container5}>
                            <Image src={jsonList.PortfolioHome[4]} width={1920} height={1080} alt='Photo de Myogi' noindex  tabIndex={0}/>
                        </div>
                    </>

                }
            </div>
        </>
    );
};

export default PortfolioHome;