import React from 'react';
import Image from 'next/image'


export const DespreNoiPhoto = () => {
    return (
    <div>
        <Image
            layout="fill" quality={100} loading="eager" objectFit='cover' objectPosition="center center"
            src='/DespreNoiPhoto.jpg' alt="Team photo"
            />
    </div>
);}