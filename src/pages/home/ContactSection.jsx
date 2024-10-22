// src/pages/home/ContactSection.jsx
import React from 'react';
import AnimatedSection from '../../components/animations/AnimatedSection';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

function ContactSection() {
    return (
        <AnimatedSection id='contact'>
            <div className='px-4 z-10 sm:mx-20 mx-auto'>
                <div className="container mx-auto py-12 text-center bg-gray-900 rounded-lg shadow-lg p-10">
                    <h2 className="text-4xl font-extrabold mb-6 text-red-500">
                        Let's Build Something Amazing Together
                    </h2>
                    <p className="mb-8 text-gray-300 text-lg leading-relaxed">
                        Whether you have questions, need assistance, or want to discuss a custom solution,
                        we are here to help. Our team of experts is ready to work with you on building the
                        perfect network infrastructure for your needs. Get in touch with us and let's make it happen!
                    </p>
                    <p className="mb-8 text-gray-400 italic text-md">
                        "The future is fiber, and your success is our mission."
                    </p>
                    <Button className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                        <Link to={'/contact'}>
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default ContactSection;
