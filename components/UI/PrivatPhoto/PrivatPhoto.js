import React from 'react';
import Image from 'next/image'

import classes from './PrivatPhoto.module.css'

export const PrivatPhoto = () => {
    return (
    <div className={classes.PrivatPhoto}>
        <Image
            layout="fill" quality={100} loading="eager" objectFit='cover' objectPosition="top center"
            src='/PrivatPhoto.jpg' alt="Private cleaning photo"
            />
    </div>
);}