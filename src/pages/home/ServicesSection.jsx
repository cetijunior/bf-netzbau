// src/pages/home/ServicesSection.jsx
import React from 'react';
import AnimatedSection from '../../components/animations/AnimatedSection';
import { motion } from 'framer-motion';

function ServicesSection() {
    const services = [
        {
            title: 'Network Installation',
            description: 'Professional installation services for both residential and commercial clients.',
            image: '/assets/images/gallery1.jpg',
        },
        {
            title: 'Maintenance & Support',
            description: 'Ongoing maintenance and support to ensure your network runs smoothly.',
            image: '/assets/images/gallery9.jpg',
        },
    ];

    return (
        <section id='services'>
            <AnimatedSection>
                <div className="container mt-32 px-4 mx-auto py-16">
                    <h2 className="text-4xl font-bold text-center mb-12 text-red-500 z-10">
                        Our Services
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10 ">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-900 z-10 hover:bg-black p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl hover:shadow-red-500"
                            >
                                <div className="overflow-hidden rounded-lg mb-6">
                                    <motion.img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-60 object-cover transform transition-transform duration-500 "
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-red-500">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}

export default ServicesSection;
