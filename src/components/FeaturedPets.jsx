import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiDollarSign, FiPhone } from 'react-icons/fi'

const FeaturedPets = ({
  searchTerm,
  selectedCategory,
  priceRange,
  ageRange,
  gender,
  petType
}) => {
  const [allPets, setAllPets] = useState([])
  const [loading, setLoading] = useState(true)

  const getPetIcon = type => {
    switch (type) {
      case 'Dog':
        return 'https://i.pinimg.com/474x/ff/7c/3b/ff7c3b713153c122e1e259309122124a.jpg'
      case 'Cat':
        return 'https://data.daryo.uz/media/cache/2020/08/photo_2020-08-04_10-03-26mmm-960x679.jpg'
      case 'Bird':
        return 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?cs=srgb&dl=pexels-roshan-kamath-793618-1661179.jpg&fm=jpg'
      case 'Fish':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHlcmASZgNOAA0mtIwob78oSLwGP1PybjDQ&s'
      case 'Rabbit':
        return 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Oryctolagus_cuniculus_Tasmania_2_%28cropped%29.jpg'
      case 'Hamster':
        return 'https://supertails.com/cdn/shop/articles/360_f_681163919_71bp2aiyziip3l4j5mbphdxtipdtm2zh_e2c1dbbd-e3b0-4c7d-bc09-1ebff39513ef.jpg?v=1747293323'
      default:
        return '🐾'
    }
  }

  useEffect(() => {
    const fetchAllPets = async () => {
      try {
        const response = await fetch('http://localhost:3001/pets')
        const data = await response.json()
        setAllPets(data)
      } catch (error) {
        console.error('Error fetching pets:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllPets()
  }, [])

  // Filter pets based on search criteria
  const featuredPets = allPets.filter(pet => {
    // Search term filter
    if (searchTerm && !pet.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !pet.location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }

    // Category filter
    if (selectedCategory && selectedCategory !== 'Barcha hayvonlar') {
      const categoryMap = {
        'Itlar': 'Dogs',
        'Mushuklar': 'Cats',
        'Qushlar': 'Birds',
        'Sudralib yuruvchilar': 'Reptiles',
        'Boshqa hayvonlar': 'Other'
      }
      if (pet.category !== categoryMap[selectedCategory]) {
        return false
      }
    }

    // Price range filter
    if (priceRange) {
      if (priceRange === '0-100' && pet.price > 100) return false
      if (priceRange === '100-500' && (pet.price < 100 || pet.price > 500)) return false
      if (priceRange === '500+' && pet.price < 500) return false
    }

    // Age range filter
    if (ageRange) {
      if (ageRange === 'puppy' && !pet.age.includes('month')) return false
      if (ageRange === 'adult' && pet.age.includes('month')) return false
      if (ageRange === 'senior' && !pet.age.includes('year')) return false
    }

    return true
  }).slice(0, 12) // Show up to 12 filtered pets

  if (loading) {
    return (
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='text-xl'>Tanlangan hayvonlar yuklanmoqda...</div>
        </div>
      </section>
    )
  }

  return (
    <section className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-[#2F3E46] mb-4'>
            Tanlangan hayvonlar
          </h2>
          <p className='text-gray-600'>
            Abadiy uylarini kutayotgan ajoyib hayvonlarimiz bilan tanishing
          </p>
        </div>

        <div className='pet-grid mb-8'>
          {featuredPets.map(pet => (
            <div
              key={pet.id}
              className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4'
            >
              <div className='w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4'>
                <img
                  src={getPetIcon(pet.type)}
                  alt={pet.name}
                  className='w-full h-full object-cover rounded-lg'
                />
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
                <button className='btn-primary flex-1 flex items-center justify-center gap-2'>
                  <FiDollarSign size={16} />
                  {pet.price === 0 ? 'Farzandlikka olish' : 'Sotib olish'}
                </button>
                <button className='btn-secondary flex-1 flex items-center justify-center gap-2'>
                  <FiPhone size={16} />
                  Aloqa
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Link
            to='/buy-pets'
            className='inline-block bg-[#A8DADC] hover:bg-[#A8DADC]/80 text-[#2F3E46] font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg'
          >
            Barcha hayvonlarni ko'rish
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPets
