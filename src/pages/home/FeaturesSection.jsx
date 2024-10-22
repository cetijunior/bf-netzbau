// src/pages/home/FeaturesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaCloud, FaLock } from 'react-icons/fa';
import AnimatedSection from '../../components/animations/AnimatedSection';

function FeaturesSection() {
    const features = [
        {
            icon: <FaNetworkWired className="text-red-500 text-6xl mb-4" />,
            title: 'High-Speed Networks',
            description: 'Experience lightning-fast internet speeds with our advanced network infrastructure.',
        },
        {
            icon: <FaCloud className="text-red-500 text-6xl mb-4" />,
            title: 'Cloud Integration',
            description: 'Seamless integration with cloud services to keep you connected anywhere.',
        },
        {
            icon: <FaLock className="text-red-500 text-6xl mb-4" />,
            title: 'Secure Connections',
            description: 'Top-notch security protocols to protect your data and privacy.',
        },
    ];

    return (
        <sections id='#features'>
            <AnimatedSection>
                <div className="relative container px-4 mx-auto py-16">
                    <h2 className="text-4xl font-bold text-center mb-12 text-red-500 relative z-10">
                        Our Features
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-red-500"
                            >
                                {feature.icon}
                                <h3 className="text-2xl font-semibold mb-4 text-red-500">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </sections>
    );
}

export default FeaturesSection;
