// src/components/animations/AnimatedSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedSection({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.section>
    );
}

export default AnimatedSection;
