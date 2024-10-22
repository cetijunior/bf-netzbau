// src/components/common/Button.jsx
import React from 'react';

function Button({ children, onClick, type = 'button' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="relative inline-block px-6 py-2 font-medium group"
        >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 translate-y-0 bg-red group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-red group-hover:bg-black"></span>
            <span className="relative text-white">{children}</span>
        </button>
    );
}

export default Button;
