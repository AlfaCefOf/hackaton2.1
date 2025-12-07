import React, { useState } from 'react'
import {
  FiHeart,
  FiDollarSign,
  FiMapPin,
  FiUsers,
  FiTarget,
  FiCreditCard,
  FiPhone,
  FiMail
} from 'react-icons/fi'

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedShelter, setSelectedShelter] = useState(null)
  const [showDonationForm, setShowDonationForm] = useState(false)

  const shelters = [
    {
      id: 1,
      name: 'Tashkent Animal Shelter',
      location: 'Tashkent',
      animals: 50,
      needs: 'Food and medicine',
      progress: 70,
      goal: 5000,
      raised: 3500,
      description:
        'The main animal shelter in Tashkent providing care for abandoned and stray animals.',
      contact: {
        phone: '+998 71 123 45 67',
        email: 'shelter@tashkent.uz'
      }
    },
    {
      id: 2,
      name: 'Pet Rescue Center',
      location: 'Tashkent',
      animals: 30,
      needs: 'Vaccinations and medical care',
      progress: 40,
      goal: 3000,
      raised: 1200,
      description:
        'Specialized in rescuing and rehabilitating injured and sick animals.',
      contact: {
        phone: '+998 71 234 56 78',
        email: 'rescue@pets.uz'
      }
    },
    {
      id: 3,
      name: 'Wildlife Rehabilitation',
      location: 'Tashkent Region',
      animals: 15,
      needs: 'Specialized veterinary care',
      progress: 25,
      goal: 8000,
      raised: 2000,
      description:
        'Dedicated to rescuing and rehabilitating wildlife and exotic animals.',
      contact: {
        phone: '+998 71 345 67 89',
        email: 'wildlife@rescue.uz'
      }
    }
  ]

  const donationAmounts = [25, 50, 100, 250, 500]

  const handleDonate = shelter => {
    setSelectedShelter(shelter)
    setShowDonationForm(true)
  }

  const handleDonationSubmit = () => {
    const amount = customAmount || selectedAmount
    alert(
      `Thank you for your generous donation of $${amount} to ${selectedShelter.name}! Your support helps save animal lives.`
    )
    setShowDonationForm(false)
    setCustomAmount('')
  }

  const calculateProgress = (raised, goal) => {
    return Math.round((raised / goal) * 100)
  }

  return (
    <section className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-[#2F3E46] mb-4'>
            Support Animal Shelters
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Your donations provide food, medical care, and shelter for animals
            in need. Every contribution makes a real difference in an animal's
            life.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white rounded-lg p-6 text-center shadow-md'>
            <FiHeart className='mx-auto text-3xl text-red-500 mb-2' />
            <div className='text-2xl font-bold text-[#2F3E46]'>500+</div>
            <div className='text-gray-600'>Animals Helped</div>
          </div>
          <div className='bg-white rounded-lg p-6 text-center shadow-md'>
            <FiUsers className='mx-auto text-3xl text-blue-500 mb-2' />
            <div className='text-2xl font-bold text-[#2F3E46]'>200+</div>
            <div className='text-gray-600'>Donors This Year</div>
          </div>
          <div className='bg-white rounded-lg p-6 text-center shadow-md'>
            <FiTarget className='mx-auto text-3xl text-green-500 mb-2' />
            <div className='text-2xl font-bold text-[#2F3E46]'>95%</div>
            <div className='text-gray-600'>Funds Go to Animals</div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {shelters.map(shelter => (
            <div
              key={shelter.id}
              className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow'
            >
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-xl font-semibold text-[#2F3E46]'>
                  {shelter.name}
                </h3>
                <span className='bg-[#A8DADC] text-[#2F3E46] text-xs px-2 py-1 rounded-full'>
                  {calculateProgress(shelter.raised, shelter.goal)}% Funded
                </span>
              </div>

              <div className='space-y-3 mb-4'>
                <div className='flex items-center text-gray-600 text-sm'>
                  <FiMapPin className='mr-2' size={14} />
                  {shelter.location}
                </div>
                <div className='flex items-center text-gray-600 text-sm'>
                  <FiHeart className='mr-2' size={14} />
                  {shelter.animals} animals in care
                </div>
                <div className='flex items-center text-gray-600 text-sm'>
                  <FiTarget className='mr-2' size={14} />
                  Urgent: {shelter.needs}
                </div>
              </div>

              <p className='text-gray-600 text-sm mb-4'>
                {shelter.description}
              </p>

              {/* Progress Bar */}
              <div className='mb-4'>
                <div className='flex justify-between text-sm text-gray-600 mb-1'>
                  <span>${shelter.raised.toLocaleString()} raised</span>
                  <span>${shelter.goal.toLocaleString()} goal</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-3'>
                  <div
                    className='bg-gradient-to-r from-[#A8DADC] to-[#F4A261] h-3 rounded-full transition-all duration-500'
                    style={{
                      width: `${calculateProgress(
                        shelter.raised,
                        shelter.goal
                      )}%`
                    }}
                  ></div>
                </div>
              </div>

              <div className='flex gap-2'>
                <button
                  onClick={() => handleDonate(shelter)}
                  className='flex-1 btn-accent flex items-center justify-center gap-2'
                >
                  <FiDollarSign size={16} />
                  Donate
                </button>
                <button className='px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors'>
                  <FiPhone size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Donation Modal */}
        {showDonationForm && selectedShelter && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
            <div className='bg-white rounded-lg max-w-md w-full p-6'>
              <h3 className='text-xl font-semibold text-[#2F3E46] mb-4'>
                Donate to {selectedShelter.name}
              </h3>

              {/* Amount Selection */}
              <div className='mb-6'>
                <label className='block text-sm font-medium text-gray-700 mb-3'>
                  Select Donation Amount
                </label>
                <div className='grid grid-cols-3 gap-2 mb-3'>
                  {donationAmounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                      }}
                      className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-[#A8DADC] border-[#A8DADC] text-[#2F3E46]'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FiDollarSign className='text-gray-400' />
                  </div>
                  <input
                    type='number'
                    placeholder='Custom amount'
                    value={customAmount}
                    onChange={e => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(0)
                    }}
                    className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8DADC] focus:border-transparent'
                  />
                </div>
              </div>

              {/* Donation Summary */}
              <div className='bg-gray-50 rounded-lg p-4 mb-6'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-sm text-gray-600'>
                    Donation Amount:
                  </span>
                  <span className='font-semibold text-[#2F3E46]'>
                    ${(customAmount || selectedAmount).toLocaleString()}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-sm text-gray-600'>Benefiting:</span>
                  <span className='text-sm font-medium text-gray-800'>
                    {selectedShelter.animals} animals
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-3'>
                <button
                  onClick={() => setShowDonationForm(false)}
                  className='flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'
                >
                  Cancel
                </button>
                <button
                  onClick={handleDonationSubmit}
                  className='flex-1 btn-accent flex items-center justify-center gap-2'
                >
                  <FiCreditCard size={16} />
                  Donate ${(customAmount || selectedAmount).toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <div className='bg-gradient-to-r from-[#A8DADC] to-[#F1FAEE] rounded-lg p-8'>
            <h3 className='text-2xl font-bold text-[#2F3E46] mb-4'>
              Make a Difference Today
            </h3>
            <p className='text-[#2F3E46]/80 mb-6 max-w-2xl mx-auto'>
              Your donation provides essential care for animals in need. From
              food and medical treatment to shelter and rehabilitation, every
              dollar helps save lives.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='btn-primary flex items-center justify-center gap-2'>
                <FiHeart size={16} />
                Become a Monthly Donor
              </button>
              <button className='btn-secondary flex items-center justify-center gap-2'>
                <FiPhone size={16} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonationSection
