// src/components/animations/ParallaxSection.jsx
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function ParallaxSection({ backgroundImage, children }) {
    const { scrollY } = useViewportScroll();
    const y = useTransform(scrollY, [0, 500], [0, -200]);

    return (
        <div className="relative h-60 overflow-hidden">
            <motion.div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    y,
                }}
                className="absolute inset-0 bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}

export default ParallaxSection;
