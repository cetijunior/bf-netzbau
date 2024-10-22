// src/components/common/Card.jsx
import React from 'react';

function Card({ children }) {
    return (
        <div className="bg-gray-800 text-white p-6 rounded shadow-md">
            {children}
        </div>
    );
}

export default Card;
