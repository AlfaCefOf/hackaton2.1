import React, { useState } from 'react';
import { FiHeart, FiHome, FiPhone, FiMail, FiMapPin, FiCalendar, FiUser } from 'react-icons/fi';

const AdoptionFoster = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [showContactForm, setShowContactForm] = useState(null);

  const pets = [
    {
      id: 1,
      name: "Luna",
      type: "Dog",
      breed: "Mixed Breed",
      age: "2 years",
      story: "Rescued from the streets, Luna is looking for a loving home. She's very friendly and loves children.",
      location: "Tashkent Animal Shelter",
      image: "🐕",
      category: "adoption",
      urgent: true
    },
    {
      id: 2,
      name: "Mittens",
      type: "Cat",
      breed: "Domestic Shorthair",
      age: "8 months",
      story: "Abandoned kitten, needs temporary care. Very playful and affectionate.",
      location: "Pet Rescue Center",
      image: "🐱",
      category: "foster",
      urgent: false
    },
    {
      id: 3,
      name: "Max",
      type: "Dog",
      breed: "Labrador",
      age: "1 year",
      story: "Found wandering the streets, needs a temporary home while we find his permanent family.",
      location: "Tashkent Animal Shelter",
      image: "🐕",
      category: "foster",
      urgent: true
    },
    {
      id: 4,
      name: "Bella",
      type: "Cat",
      breed: "Siamese",
      age: "6 months",
      story: "Orphaned kittens need a nurturing foster home for 8-12 weeks.",
      location: "Pet Rescue Center",
      image: "🐱",
      category: "adoption",
      urgent: false
    }
  ];

  const filteredPets = selectedType === 'all'
    ? pets
    : pets.filter(pet => pet.category === selectedType);

  const handleContact = (petId) => {
    setShowContactForm(petId);
  };

  const handleAdopt = (pet) => {
    alert(`Thank you for your interest in adopting ${pet.name}! Our team will contact you within 24 hours.`);
  };

  const handleFoster = (pet) => {
    alert(`Thank you for considering fostering ${pet.name}! Our team will contact you within 24 hours.`);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2F3E46] mb-4">Farzandlikka olish va homiylik</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uy hayvonlariga baxtning ikkinchi imkoniyatini bering. Siz farzandlikka olishni xohlaysizmi yoki vaqtinchalik homiylik ta'minlaysizmi,
            har bir hayvon mehribon uyga loyiqdir.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedType === 'all'
                ? 'bg-[#A8DADC] text-[#2F3E46] shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Barcha hayvonlar
          </button>
          <button
            onClick={() => setSelectedType('adoption')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedType === 'adoption'
                ? 'bg-[#A8DADC] text-[#2F3E46] shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FiHome size={16} />
            Farzandlikka olish uchun mavjud
          </button>
          <button
            onClick={() => setSelectedType('foster')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedType === 'foster'
                ? 'bg-[#A8DADC] text-[#2F3E46] shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <FiHeart size={16} />
            Homiylikka muhtoj
          </button>
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="bg-[#F1FAEE] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{pet.image}</div>
                {pet.urgent && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                    Shoshilinch
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-[#2F3E46] mb-2">{pet.name} bilan tanishing</h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FiUser className="mr-2" size={14} />
                  {pet.breed} • {pet.age}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FiMapPin className="mr-2" size={14} />
                  {pet.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FiCalendar className="mr-2" size={14} />
                  {pet.category === 'adoption' ? 'Farzandlikka olish uchun mavjud' : 'Homiylikka muhtoj'}
                </div>
              </div>

              <p className="text-[#2F3E46]/80 mb-6">{pet.story}</p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleContact(pet.id)}
                  className="flex-1 bg-white hover:bg-gray-50 text-[#2F3E46] font-medium py-2 px-4 rounded-lg border border-gray-300 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FiPhone size={16} />
                  Aloqa
                </button>
                <button
                  onClick={() => pet.category === 'adoption' ? handleAdopt(pet) : handleFoster(pet)}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <FiHeart size={16} />
                  {pet.category === 'adoption' ? 'Farzandlikka olish' : 'Homiylik'}
                </button>
              </div>

              {/* Contact Form Modal */}
              {showContactForm === pet.id && (
                <div className="mt-4 p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold text-[#2F3E46] mb-3">Aloqa ma'lumotlari</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <FiPhone className="mr-2 text-gray-500" size={14} />
                      <span>+998 90 123 45 67</span>
                    </div>
                    <div className="flex items-center">
                      <FiMail className="mr-2 text-gray-500" size={14} />
                      <span>adoption@pettashkent.uz</span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="mr-2 text-gray-500" size={14} />
                      <span>{pet.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowContactForm(null)}
                    className="mt-3 text-sm text-gray-500 hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#2F3E46] mb-4">Ready to Make a Difference?</h3>
            <p className="text-[#2F3E46]/80 mb-6 max-w-2xl mx-auto">
              Every pet deserves a loving home. Whether you can adopt permanently or provide temporary foster care,
              your compassion can change a life forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center gap-2">
                <FiHeart size={16} />
                Start Adoption Process
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <FiPhone size={16} />
                Call Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionFoster;