import React from 'react';
import Navbar from '../components/Navbar';
import AdoptionFoster from '../components/AdoptionFoster';
import Footer from '../components/Footer';

const Adoption = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pet Adoption & Foster</h1>
            <p className="text-xl md:text-2xl opacity-90">Give pets a second chance at happiness</p>
          </div>
        </div>
        <AdoptionFoster />
      </div>
      <Footer />
    </div>
  );
};

export default Adoption;