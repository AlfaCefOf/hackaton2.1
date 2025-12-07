import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchFilters from '../components/SearchFilters';
import FeaturedPets from '../components/FeaturedPets';
import AdoptionFoster from '../components/AdoptionFoster';
import DonationSection from '../components/DonationSection';
import VetMap from '../components/VetMap';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SearchFilters />
      <FeaturedPets />
      <AdoptionFoster />
      <DonationSection />
      <VetMap />
      <Footer />
    </div>
  );
};

export default Dashboard;