'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Button.module.css';


const Button = ({ type, content, link, scrollId }) => {

    const handleClick = () => {
        if (scrollId && !link) {
            const element = document.querySelector(`${scrollId}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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
                    className={styles.button__container}>
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