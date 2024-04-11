'use client'
import React, { useEffect, useState } from 'react';
import styles from './PortfolioHome.module.css';
import Image from 'next/image';

const PortfolioHome = () => {
    const blurDataUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiI+PC9mZUdhdXNzaWFuQmx1cj48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIiBmaWx0ZXI9InVybCgjYikiIC8+PC9zdmc+";
    const [jsonList, setJsonList] = useState(null);

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
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    

    return (
        <div className={styles.container}>
            {jsonList !== null && 
                <>
                    {jsonList.PortfolioHome.map((photo, index) => (
                        <div key={index}>
                            <Image src={photo} width={1920} height={1080} alt='asas' placeholder="blur" blurDataURL={blurDataUrl} loading='lazy' />
                        </div>
                    ))}
                </>
                
            }
        </div>
    );
};

export default PortfolioHome;