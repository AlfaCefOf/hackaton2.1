import React, { useState, useEffect } from 'react'
import { FiHeart, FiPhone, FiMapPin, FiDollarSign } from 'react-icons/fi'

const PetMarketplace = () => {
  const [pets, setPets] = useState([])
  const [filteredPets, setFilteredPets] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5001/pets')
        const data = await response.json()
        setPets(data)
        setFilteredPets(data)
      } catch (error) {
        console.error('Error fetching pets:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPets()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPets(pets)
    } else {
      setFilteredPets(pets.filter(pet => pet.category === selectedCategory))
    }
  }, [selectedCategory, pets])

  const categories = ['All', 'Dogs', 'Cats', 'Birds, Hamsters, fishs, Rabbits']

  const getPetIcon = type => {
    switch (type) {
      case 'Dog':
        return '🐕'
      case 'Cat':
        return '🐱'
      case 'Bird':
        return '🐦'
      case 'Fish':
        return '🐠'
      case 'Rabbit':
        return '🐰'
      case 'Hamster':
        return '🐹'
      default:
        return '🐾'
    }
  }

  const handleBuy = pet => {
    if (pet.price === 0) {
      alert(
        `Thank you for your interest in adopting ${pet.name}! Our adoption team will contact you within 24 hours.`
      )
    } else {
      alert(
        `Thank you for your interest in purchasing ${pet.name} for $${pet.price}! Our sales team will contact you within 24 hours.`
      )
    }
  }

  const handleContact = pet => {
    alert(
      `Contact information for ${pet.name}:\n\nPhone: +998 90 123 45 67\nEmail: info@pettashkent.uz\nLocation: ${pet.location}\n\nOur team will be happy to assist you!`
    )
  }

  if (loading) {
    return (
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='text-xl'>Loading pets...</div>
        </div>
      </section>
    )
  }

  return (
    <section className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-[#2F3E46] text-center mb-8'>
          Pet Marketplace
        </h2>

        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#A8DADC] text-[#2F3E46] shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='pet-grid'>
          {filteredPets.map(pet => (
            <div
              key={pet.id}
              className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4'
            >
              <div className='w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-6xl mb-4'>
                {getPetIcon(pet.type)}
              </div>
              <h3 className='text-lg font-semibold text-[#2F3E46] mb-2'>
                {pet.name}
              </h3>
              <p className='text-sm text-gray-600 mb-1'>
                {pet.breed} • {pet.age}
              </p>
              <div className='flex items-center text-sm text-gray-600 mb-4'>
                <FiMapPin className='mr-1' />
                {pet.location}
              </div>
              <div className='flex flex-wrap gap-1 mb-4'>
                {pet.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 bg-[#A8DADC] text-[#2F3E46] text-xs rounded-full'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex flex-wrap gap-1 mb-4'>
                {pet.badges.map((badge, index) => (
                  <span
                    key={index}
                    className='px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full'
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>
              <div className='flex gap-2'>
                <button
                  onClick={() => handleBuy(pet)}
                  className='btn-primary flex-1 flex items-center justify-center gap-2'
                >
                  <FiDollarSign size={16} />
                  {pet.price === 0 ? 'Adopt' : 'Buy'}
                </button>
                <button
                  onClick={() => handleContact(pet)}
                  className='btn-secondary flex-1 flex items-center justify-center gap-2'
                >
                  <FiPhone size={16} />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PetMarketplace
