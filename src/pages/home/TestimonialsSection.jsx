// src/pages/home/TestimonialsSection.jsx
import React from 'react';
import AnimatedSection from '../../components/animations/AnimatedSection';
import { motion } from 'framer-motion';

function TestimonialsSection() {
    const testimonials = [
        {
            quote: 'BF-Netzbau provided exceptional service and their network solutions are top-notch!',
            author: 'John Doe, CEO of TechCorp',
        },
        {
            quote: "Our company's connectivity has never been better. Highly recommend their services.",
            author: 'Jane Smith, CTO of Innovate Ltd.',
        },
    ];

    return (
        <AnimatedSection>
            <div id='#testimonials' className="container px-4 mx-auto py-16">
                <h2 className="text-4xl font-bold text-center mb-12 z-10 text-red-500">
                    What Our Clients Say
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-900 p-8 z-10 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl hover:shadow-red-500"
                        >
                            <div className="relative">
                                {/* Quote Icon */}
                                <div className="absolute top-0 left-0 transform -translate-y-6 -translate-x-4 text-red-500 text-5xl">
                                    &ldquo;
                                </div>
                                {/* Quote Text */}
                                <p className="italic text-gray-300 text-lg leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>
                            <h4 className="mt-6 font-semibold text-red-500 text-xl">
                                {testimonial.author}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
}

export default TestimonialsSection;
