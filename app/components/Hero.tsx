'use client';

import resinArtImage from '@/public/hero-bg.jpeg'; 
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';  

const Hero = () => {
    const variants = {
        hidden: { x: 0, y: 70, opacity: 0.25 },
        visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.1 } },
    };

    return (
        <div className='hero-section relative w-full h-screen overflow-hidden'>
            <div className='hero-container relative w-full h-full'>
                {/* Background Image */}
                <div className='absolute inset-0 -z-10'>
                    <Image 
                        src={resinArtImage}
                        alt="Resin art"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center bottom' }} 
                        priority
                    />
                </div>
                {/* Darker Overlay */}
                <div className='absolute inset-0 bg-slate-700 bg-opacity-50'></div>
                {/* Hero Content */}
                <div className='hero-resin-art relative z-10 flex items-center justify-center h-full px-4 text-center'>
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={variants}
                        className='text-pretty drop-shadow-md'
                    >
                        <h1 className='text-6xl font-bold md:text-7xl lg:text-8xl tracking-tight'>
                            Resin Art Creations
                        </h1>
                        <p className='mt-6 text-lg md:text-xl lg:text-2xl font-medium'>
                            Beautifully crafted resin art for every occasion.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
