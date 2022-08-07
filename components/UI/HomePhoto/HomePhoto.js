import React from 'react';
import Image from 'next/image'

export const HomePhoto = () => {
    return (
    <div>
        <Image
            layout="fill" quality={100} loading="eager" objectFit='cover' objectPosition="center center"
            src='/HomePhoto.jpg' alt="Guy cleaning photo"
            />
    </div>
);}