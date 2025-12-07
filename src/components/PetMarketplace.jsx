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
        const response = await fetch('http://localhost:5000/pets')
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

  const categories = ['Hammasi', 'Itlar', 'Mushuklar', 'Qushlar, Hamsterlar, Baliqlar, Quziqorinlar']

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
        `${pet.name}ni farzandlikka olishga qiziqishingiz uchun rahmat! Bizning farzandlikka olish jamoasi 24 soat ichida siz bilan bog'lanadi.`
      )
    } else {
      alert(
        `${pet.name}ni $${pet.price}ga sotib olishga qiziqishingiz uchun rahmat! Bizning savdo jamoasi 24 soat ichida siz bilan bog'lanadi.`
      )
    }
  }

  const handleContact = pet => {
    alert(
      `${pet.name} uchun aloqa ma'lumotlari:\n\nTelefon: +998 90 123 45 67\nEmail: info@pettashkent.uz\nManzil: ${pet.location}\n\nBizning jamoa sizga yordam berishdan xursand bo'ladi!`
    )
  }

  if (loading) {
    return (
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='text-xl'>Hayvonlar yuklanmoqda...</div>
        </div>
      </section>
    )
  }

  return (
    <section className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-[#2F3E46] text-center mb-8'>
          Uy Hayvonlari Bozori
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
              <div className='w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4'>
                <img src={pet.image} alt={pet.name} className='w-full h-full object-cover' />
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
                  {pet.price === 0 ? 'Farzandlikka olish' : 'Sotib olish'}
                </button>
                <button
                  onClick={() => handleContact(pet)}
                  className='btn-secondary flex-1 flex items-center justify-center gap-2'
                >
                  <FiPhone size={16} />
                  Aloqa
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
