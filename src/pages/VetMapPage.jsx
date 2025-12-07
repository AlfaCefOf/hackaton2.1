import React from 'react';
import Navbar from '../components/Navbar';
import VetMap from '../components/VetMap';
import Footer from '../components/Footer';

const VetMapPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Veterinary Clinics</h1>
            <p className="text-xl md:text-2xl opacity-90">Find trusted veterinary services near you</p>
          </div>
        </div>
        <VetMap />
      </div>
      <Footer />
    </div>
  );
};

export default VetMapPage;