// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from './home/HeroSection';
import FeaturesSection from './home/FeaturesSection';
import ServicesSection from './home/ServicesSection';
import TestimonialsSection from './home/TestimonialsSection';
import ContactSection from './home/ContactSection';
import ParallaxSection from '../components/animations/ParallaxSection';

function HomePage() {
    return (
        <div className="pt-20">
            <HeroSection />
            <ServicesSection />
            <FeaturesSection />

            {/* <ParallaxSection backgroundImage="/assets/images/parallax-bg.jpg">
                <h2 className="text-4xl font-bold text-white">Our Vision</h2>
            </ParallaxSection> */}

            <ContactSection />
            <TestimonialsSection />
        </div>
    );
}

export default HomePage;
