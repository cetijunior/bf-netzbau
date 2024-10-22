// src/components/layout/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
    const navigate = useNavigate();

    // Function to scroll to top
    const handleScrollToTop = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm"
        >
            <div className="container mx-auto flex items-center justify-between p-5">
                <div className="text-2xl font-bold text-red cursor-pointer">
                    {/* Scroll to top when logo is clicked */}
                    <div onClick={() => handleScrollToTop('/')}>
                        <img className='h-12 w-auto sm:hidden' src='/assets/images/slogo.png' alt="Small Logo"></img>
                        <img className='h-12 w-auto hidden sm:block' src='/assets/images/logo.png' alt="Large Logo"></img>
                    </div>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <div
                            onClick={() => handleScrollToTop('/about')}
                            className="cursor-pointer hover:text-red transition"
                        >
                            About
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => handleScrollToTop('/services')}
                            className="cursor-pointer hover:text-red transition"
                        >
                            Gallery
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={() => handleScrollToTop('/contact')}
                            className="cursor-pointer hover:text-red transition"
                        >
                            Contact
                        </div>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}

export default Navbar;
