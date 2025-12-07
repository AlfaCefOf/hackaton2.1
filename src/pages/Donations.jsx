import React from 'react';
import Navbar from '../components/Navbar';
import DonationSection from '../components/DonationSection';
import Footer from '../components/Footer';

const Donations = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission</h1>
            <p className="text-xl md:text-2xl opacity-90">Help us provide better care for pets in need</p>
          </div>
        </div>
        <DonationSection />
      </div>
      <Footer />
    </div>
  );
};

export default Donations;