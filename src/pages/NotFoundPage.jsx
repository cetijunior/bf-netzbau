// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="container mx-auto flex flex-col justify-center mt-60 text-center py-12">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Page Not Found</p>
            <Link to="/" className="text-red-600 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
}

export default NotFoundPage;
