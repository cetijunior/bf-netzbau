// src/components/layout/Footer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
    const navigate = useNavigate();

    // Function to scroll to top
    const handleScrollToTop = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black bg-opacity-80 backdrop-blur-sm text-white py-16">
            <div className="container mx-auto flex flex-col sm:space-y-10 lg:space-y-0 lg:flex-row justify-between items-center">
                {/* Text Section */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="text-3xl font-bold mb-4">About BF-Netzbau</h3>
                    <p className="text-gray-300 max-w-md">
                        BF-Netzbau specializes in providing advanced fiber optic network installation and maintenance solutions for businesses and homes. Trust us for all your networking needs.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row  lg:space-x-16">
                        <ul className="flex flex-col space-y-2 mt-6 lg:mt-0">
                            <p className='font-bold text-xl'>Pages: </p>
                            <li>
                                <div
                                    onClick={() => handleScrollToTop('/about')}
                                    className="cursor-pointer hover:text-red-500 transition"
                                >
                                    About Us
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={() => handleScrollToTop('/services')}
                                    className="cursor-pointer hover:text-red-500 transition"
                                >
                                    Gallery
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={() => handleScrollToTop('/contact')}
                                    className="cursor-pointer hover:text-red-500 transition"
                                >
                                    Contact
                                </div>
                            </li>

                        </ul>

                        <ul className="flex flex-col space-y-2 mt-6 lg:mt-0">
                            <p className='font-bold text-xl'>Security: </p>

                            <li>
                                <div
                                    onClick={() => handleScrollToTop('/privacy')}
                                    className="cursor-pointer hover:text-red-500 transition"
                                >
                                    Privacy Policy
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={() => handleScrollToTop('/terms')}
                                    className="cursor-pointer hover:text-red-500 transition"
                                >
                                    Terms of Service
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>

                {/* Social Icons Section */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-6 justify-center lg:justify-start">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500 transition"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500 transition"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500 transition"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} BF-Netzbau. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
