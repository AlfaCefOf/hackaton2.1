import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiDollarSign, FiPhone } from 'react-icons/fi';

const FeaturedPets = () => {
  const [featuredPets, setFeaturedPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPetIcon = (type) => {
    switch (type) {
      case 'Dog':
        return '🐕';
      case 'Cat':
        return '🐱';
      case 'Bird':
        return '🐦';
      case 'Fish':
        return '🐠';
      case 'Rabbit':
        return '🐰';
      case 'Hamster':
        return '🐹';
      default:
        return '🐾';
    }
  };

  useEffect(() => {
    const fetchFeaturedPets = async () => {
      try {
        const response = await fetch('http://localhost:3001/pets');
        const data = await response.json();
        setFeaturedPets(data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching featured pets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPets();
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl">Loading featured pets...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2F3E46] mb-4">Featured Pets</h2>
          <p className="text-gray-600">Meet some of our amazing pets waiting for their forever homes</p>
        </div>

        <div className="pet-grid mb-8">
          {featuredPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-6xl mb-4">
                {getPetIcon(pet.type)}
              </div>
              <h3 className="text-lg font-semibold text-[#2F3E46] mb-2">{pet.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{pet.breed} • {pet.age}</p>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <FiMapPin className="mr-1" />
                {pet.location}
              </div>
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
                <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <FiDollarSign size={16} />
                  {pet.price === 0 ? 'Adopt' : 'Buy'}
                </button>
                <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
                  <FiPhone size={16} />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/buy-pets"
            className="inline-block bg-[#A8DADC] hover:bg-[#A8DADC]/80 text-[#2F3E46] font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            View All Pets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;