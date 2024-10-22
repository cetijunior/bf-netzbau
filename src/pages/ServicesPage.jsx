// src/pages/home/GalleryPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
    Work: [
        "/assets/images/gallery1.jpg",
        "/assets/images/gallery9.jpg",
        "/assets/images/gallery10.jpg",

    ],
    Garage: [

    ],
};

function ServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState("Work");
    const [selectedMedia, setSelectedMedia] = useState(null);

    const mediaFiles = categories[selectedCategory] || [];
    const isVideo = (file) => file.endsWith(".mp4") || file.endsWith(".webm") || file.endsWith(".ogg");

    return (
        <div className="container mx-auto px-6 mt-16 py-16 relative">
            {/* Particles Background */}
            <div className="absolute inset-0 z-0">
            </div>

            {/* Header */}
            <h2 className="text-4xl font-extrabold text-center mb-12 text-red-500 relative z-10">
                Our Gallery
            </h2>

            {/* Category Selector */}
            <div className="flex justify-center space-x-6 mb-8 relative z-10">
                {Object.keys(categories).map((category) => (
                    <button
                        key={category}
                        className={`px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 ${selectedCategory === category
                            ? "bg-red-500 shadow-lg"
                            : "bg-gray-700 hover:bg-gray-600"
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Image and Video Gallery */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {mediaFiles.map((media, index) => (
                    <motion.div
                        key={index}
                        className="cursor-pointer transition-transform duration-300 hover:scale-105"
                        onClick={() => setSelectedMedia(media)}
                    >
                        {isVideo(media) ? (
                            <video
                                src={media}
                                className="rounded-lg shadow-md w-full h-64 object-cover border-2 border-red-500"
                                muted
                                loop
                                autoPlay
                            />
                        ) : (
                            <img
                                src={media}
                                alt={`Gallery ${index + 1}`}
                                className="rounded-lg shadow-md w-full h-80 object-cover border-2 border-red-500"
                            />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Modal for Enlarged Image/Video */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        className="fixed z-50 sm:mt-0 mt-16 inset-0 bg-black bg-opacity-80 flex items-center justify-center "
                        onClick={() => setSelectedMedia(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {isVideo(selectedMedia) ? (
                            <motion.video
                                src={selectedMedia}
                                controls
                                className="max-w-full z-50 max-h-full border-4 border-red-500 rounded-lg"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            />
                        ) : (
                            <motion.img
                                src={selectedMedia}
                                alt="Enlarged"
                                className="max-w-full z-50 max-h-[800px] border-4 border-red-500 rounded-lg"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ServicesPage;
