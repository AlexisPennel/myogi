'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Button.module.css';
import Image from 'next/image';


const Button = ({ type, size, content, link, scrollId, icon, action }) => {

    const handleClick = () => {
        if (scrollId && !link) {
            const element = document.querySelector(`${scrollId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        if (action) {
            action();
        }
    };

    const handleKeyDown = (event) => {
        // Vérifie si la touche pressée est Entrée
        if (event.key === 'Enter') {
            handleClick();
        }
    }


    return (
        <>
            {type === 'primary' &&
                <motion.div
                    onClick={scrollId && handleClick}
                    onKeyDown={scrollId && handleKeyDown}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ boxShadow: "var(--button-boxShadow)", y:-2 }}
                    className={size === 'large' ? styles.button__container : `${styles.button__container} ${styles.button__container__small}`}>
                    {link ?
                        <Link href={link}>
                            {content}
                        </Link>
                        :
                        <p>
                            {content}
                        </p>
                    }
                    {icon && 
                        <Image src={icon} width={24} height={24} alt='icone' />
                    }
                </motion.div>
            }

            {type === 'secondary' &&
                <motion.div
                    onClick={scrollId && handleClick}
                    onKeyDown={scrollId && handleKeyDown}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ boxShadow: "var(--button-boxShadow)", y:-2}}
                    className={styles.button__container__secondary}>
                    {link ?
                        <Link href={link}>
                            {content}
                        </Link>
                        :
                        <p>
                            {content}
                        </p>
                    }
                </motion.div>
            }
        </>
    );
};

export default Button;