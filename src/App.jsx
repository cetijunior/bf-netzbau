// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import './styles/index.css'; // Tailwind CSS file
import './App.css';          // Default CSS file

function App() {
  return (
    <Router>
      <div className="fiber-bg space-y-4 min-h-screen text-white flex flex-col relative">
        <Navbar />
        <main className="flex-grow relative z-10">
          {/* Fiber Strands */}
          <div className="fiber-strand"></div>
          <div className="fiber-strand"></div>
          <div className="fiber-strand"></div>
          <div className="fiber-strand"></div>
          <div className="fiber-strand"></div>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
