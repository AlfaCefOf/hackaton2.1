import React from 'react';
import Navbar from '../components/Navbar';
import SearchFilters from '../components/SearchFilters';
import PetMarketplace from '../components/PetMarketplace';
import Footer from '../components/Footer';

const BuyPets = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Pet</h1>
            <p className="text-xl md:text-2xl opacity-90">Discover amazing pets waiting for their forever homes</p>
          </div>
        </div>
        <SearchFilters />
        <PetMarketplace />
      </div>
      <Footer />
    </div>
  );
};

export default BuyPets;