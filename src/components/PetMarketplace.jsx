import React from 'react';
import pets from '../data/pets.json';

const PetMarketplace = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2F3E46] text-center mb-8">Pet Marketplace</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-6xl mb-4">
                {pet.image}
              </div>
              <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">{pet.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{pet.breed} • {pet.age}</p>
              <p className="text-sm text-gray-600 mb-4">{pet.location}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {pet.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-[#A8DADC] text-[#2F3E46] text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {pet.badges.map((badge, index) => (
                  <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    ✓ {badge}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="btn-primary flex-1">Buy</button>
                <button className="btn-secondary flex-1">Contact</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetMarketplace;