import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchFilters from '../components/SearchFilters';
import FeaturedPets from '../components/FeaturedPets';
import AdoptionFoster from '../components/AdoptionFoster';
import DonationSection from '../components/DonationSection';
import VetMap from '../components/VetMap';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [gender, setGender] = useState('');
  const [petType, setPetType] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        ageRange={ageRange}
        setAgeRange={setAgeRange}
        gender={gender}
        setGender={setGender}
        petType={petType}
        setPetType={setPetType}
      />
      <FeaturedPets
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        priceRange={priceRange}
        ageRange={ageRange}
        gender={gender}
        petType={petType}
      />
      <AdoptionFoster />
      <DonationSection />
      <VetMap />
      <Footer />
    </div>
  );
};

export default Dashboard;