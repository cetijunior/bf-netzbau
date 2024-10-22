// src/pages/ContactPage.jsx
import React from 'react';
import AnimatedSection from '../components/animations/AnimatedSection';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage() {
    return (
        <AnimatedSection>
            <div className="container mt-14 mx-auto px-4 py-12">
                {/* Contact Us Section */}
                <motion.h1
                    className="text-5xl font-extrabold text-red-500 mb-12 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Us
                </motion.h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="p-6 bg-gray-900 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-red-500">Get in Touch</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                                    id="message"
                                    rows="5"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <Button type="submit">Send Message</Button>
                        </form>
                    </motion.div>

                    {/* Location Section */}
                    <motion.div
                        className="p-6 bg-gray-900 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-red-500">Our Location</h2>
                        <p className="text-gray-300 mb-6">
                            Reach out to us or come visit at our office. We're located in the heart of the city.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4">

                            <div className="flex items-center space-x-4 hover:text-red-500 transition-all duration-300">
                                <FaEnvelope size={20} className="text-red-500" />
                                <a href="mailto:info@bf-netzbau.com" className="text-gray-300">info@bf-netzbau.de</a>
                            </div>
                            <div className="flex items-center space-x-4 hover:text-red-500 transition-all duration-300">
                                <FaPhoneAlt size={20} className="text-red-500" />
                                <a href="tel:+1234567890" className="text-gray-300">+49 176 3275 3351</a>
                            </div>
                            <div className="flex items-center space-x-4 hover:text-red-500 transition-all duration-300">
                                <FaMapMarkerAlt size={20} className="text-red-500" />
                                <p className="text-gray-300">Amalienstraße 75, 90763 Fürth</p>
                            </div>
                        </div>

                        {/* Google Maps Preview */}
                        <div className="w-full h-64 mt-6 rounded-lg overflow-hidden shadow-md hover:shadow-red-500 hover:shadow-lg transition-all duration-300">
                            <iframe
                                className="w-full h-full border-none"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39444.674315748525!2d10.995739!3d49.453853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f5432abb13593%3A0x1c1eda35f4c6c660!2s90763%20F%C3%BCrth%2C%20Germany!5e1!3m2!1sen!2sus!4v1729609258976!5m2!1sen!2sus"
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </motion.div>


                </div>
            </div>
        </AnimatedSection>
    );
}

export default ContactPage;
