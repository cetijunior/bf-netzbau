// src/pages/AboutPage.jsx
import React from 'react';
import AnimatedSection from '../components/animations/AnimatedSection';
import { motion } from 'framer-motion';

function AboutPage() {
    return (
        <AnimatedSection>
            <div className="container mt-16 mx-auto px-6 py-16 text-center">
                {/* Header Section */}
                <motion.h1
                    className="text-5xl font-extrabold text-red-500 mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h1>

                {/* Who We Are Section */}
                <section className="my-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-4xl font-bold mb-4 text-red-500">Who We Are</h2>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                At BF-Netzbau, we specialize in building the future of fiber-optic networks. Our team of highly skilled professionals is dedicated to providing top-notch network solutions, from installation to maintenance.
                                We believe in the power of technology to transform businesses and homes, and we take pride in being at the forefront of innovation.
                            </p>
                        </motion.div>

                        <motion.div
                            className="rounded-lg overflow-hidden shadow-lg"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="/assets/images/about1.jpg"
                                alt="Our Team"
                                className="w-full h-96 object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="my-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            className="rounded-lg overflow-hidden shadow-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="/assets/images/about3.jpg"
                                alt="Our Mission"
                                className="w-full h-96 object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="text-left"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-4xl font-bold mb-4 text-red-500">Our Mission</h2>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                Our mission is to connect businesses and individuals to the world with the highest quality fiber-optic technology. We aim to make communication faster, more secure, and more reliable for everyone.
                                We are driven by innovation, and our goal is to always stay ahead of the technological curve while maintaining a customer-first approach.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="my-12 bg-gray-900 py-12 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-bold text-red-500 mb-8">Our Team</h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-12 px-6">
                        We believe that our greatest asset is our team. Each member brings their unique set of skills and experiences to the table, enabling us to provide innovative and customized solutions for our clients.
                        From engineers to project managers, our team works tirelessly to ensure the success of every project.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 px-6">
                        <motion.div
                            className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-red-500"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="/assets/images/ts3.jpg"
                                alt="Team Member"
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-red-500">John Doe</h3>
                            <p className="text-gray-400">CEO</p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-red-500"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="/assets/images/ts5.jpeg"
                                alt="Team Member"
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-red-500">Jane Smith</h3>
                            <p className="text-gray-400">CTO</p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-red-500"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="/assets/images/ts6.jpeg"
                                alt="Team Member"
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-red-500">Mike Brown</h3>
                            <p className="text-gray-400">Lead Engineer</p>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="my-12">
                    <h2 className="text-4xl font-bold text-red-500 mb-8">Why Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-red-500"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-red-500">Innovation</h3>
                            <p className="text-gray-300">
                                We stay on the cutting edge of technology to ensure that our clients have access to the most advanced network solutions available.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-red-500"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-red-500">Expertise</h3>
                            <p className="text-gray-300">
                                With years of experience in network infrastructure, we have the skills and knowledge needed to handle even the most complex projects.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-red-500"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-red-500">Customer Focus</h3>
                            <p className="text-gray-300">
                                We pride ourselves on our customer-centric approach. Your satisfaction is our top priority, and we are always here to help.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </AnimatedSection>
    );
}

export default AboutPage;
