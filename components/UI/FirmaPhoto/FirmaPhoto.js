import React from 'react';
import Image from 'next/image'

import classes from './FirmaPhoto.module.css'

export const FirmaPhoto = () => {
    return (
    <div className={classes.FirmaPhoto}>
        <Image
            layout="fill" quality={100} loading="eager" objectFit='cover' objectPosition="center center"
            src='/FirmaPhoto.jpg' alt="Company cleaning photo"
            />
    </div>
);}