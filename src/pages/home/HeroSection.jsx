// src/pages/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
    return (
        <section id="home">

            <div className="relative sm:mb-0 -mb-60 h-screen">
                {/* Video Background */}
                <video
                    className="absolute inset-0 rounded-b-full shadow-2xl shadow-red w-full h-1/3 sm:h-screen object-cover"
                    src="/assets/videos/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Overlay */}

                {/* Content */}
                <div className="relative z-10 w-full h-full flex items-center top-0 sm:-mt-72 space-y-10 justify-center space-x-0 md:space-x-60 lg:space-x-96 sm:flex-row flex-col">


                    {/* Left Text (Glasfaser) */}
                    <motion.div
                        className="flex flex-col items-center justify-center px-8 text-center lg:text-right sm:mb-0"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <h1 className="sm:text-6xl text-5xl mt-10 font-bold text-red-600 mb-2">
                            <motion.span
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Glasfaser
                            </motion.span>
                        </h1>
                        <h2 className="sm:text-5xl text-4xl font-medium text-white">
                            Service
                        </h2>
                    </motion.div>

                    {/* Right Text (Tiefbau) */}
                    <motion.div
                        className="flex flex-col items-center justify-center px-20 text-center  lg:text-left"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <h1 className="sm:text-6xl text-5xl font-bold text-red-600 mb-2">
                            <motion.span
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Tiefbau
                            </motion.span>
                        </h1>
                        <h2 className="sm:text-5xl text-4xl  font-medium text-white">
                            Arbeiten
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
