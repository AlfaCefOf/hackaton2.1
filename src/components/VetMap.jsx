import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
})

const VetMap = () => {
  const clinics = [
    {
      id: 1,
      name: 'Central Vet Clinic',
      address: '123 Amir Temur St, Tashkent',
      phone: '+998 71 123 45 67',
      rating: 4.5,
      services: ['Vaccinations', 'Surgery', 'Emergency Care'],
      hours: 'Mon-Sat: 9:00-18:00',
      position: [41.2995, 69.2401] // Tashkent coordinates
    },
    {
      id: 2,
      name: 'PetCare Plus',
      address: '456 Navoi St, Tashkent',
      phone: '+998 71 234 56 78',
      rating: 4.8,
      services: ['Checkups', 'Emergency', 'Dental Care'],
      hours: 'Mon-Sun: 8:00-20:00',
      position: [41.3111, 69.2797]
    },
    {
      id: 3,
      name: 'Animal Health Center',
      address: '789 Bunyodkor Ave, Tashkent',
      phone: '+998 71 345 67 89',
      rating: 4.6,
      services: ['Vaccinations', 'Surgery', 'Laboratory'],
      hours: 'Mon-Fri: 9:00-17:00',
      position: [41.2825, 69.2015]
    },
    {
      id: 4,
      name: 'Tashkent Pet Hospital',
      address: '321 Mustaqillik St, Tashkent',
      phone: '+998 71 456 78 90',
      rating: 4.9,
      services: ['Emergency', 'Surgery', 'Intensive Care'],
      hours: '24/7',
      position: [41.3167, 69.25]
    },
    {
      id: 5,
      name: 'Green Valley Vet',
      address: '654 Olmazor St, Tashkent',
      phone: '+998 71 567 89 01',
      rating: 4.4,
      services: ['Checkups', 'Vaccinations', 'Grooming'],
      hours: 'Mon-Sat: 10:00-19:00',
      position: [41.2858, 69.2333]
    }
  ]

  const [selectedClinic, setSelectedClinic] = useState(null)
  const [mapCenter, setMapCenter] = useState([41.2995, 69.2401]) // Tashkent center

  // Custom marker icon
  const vetIcon = new L.Icon({
    iconUrl:
      'data:image/svg+xml;base64,' +
      btoa(`
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#ef4444"/>
        <path d="M8 12h16v8H8z" fill="white"/>
        <path d="M12 8v4M20 8v4M10 16h12" stroke="#ef4444" stroke-width="2"/>
        <circle cx="16" cy="18" r="2" fill="#ef4444"/>
      </svg>
    `),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Find Veterinary Clinics
          </h2>
          <p className='text-xl text-gray-600'>
            Locate trusted veterinary services near you in Tashkent
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Clinic List */}
          <div className='lg:col-span-1'>
            <h3 className='text-xl font-semibold text-gray-900 mb-6'>
              Available Clinics
            </h3>
            <div className='space-y-4'>
              {clinics.map(clinic => (
                <div
                  key={clinic.id}
                  className={`bg-white rounded-lg p-4 shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
                    selectedClinic?.id === clinic.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => {
                    setSelectedClinic(clinic)
                    setMapCenter(clinic.position)
                  }}
                >
                  <div className='flex items-start space-x-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-900'>
                        {clinic.name}
                      </h4>
                      <p className='text-sm text-gray-600 mb-1'>
                        {clinic.address}
                      </p>
                      <div className='flex items-center space-x-2'>
                        <span className='text-sm text-yellow-600'>
                          ⭐ {clinic.rating}
                        </span>
                        <span className='text-xs text-gray-500'>
                          {clinic.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaflet Map */}
          <div className='lg:col-span-2'>
            <div className='h-96 rounded-xl shadow-lg overflow-hidden'>
              <MapContainer
                center={mapCenter}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
                className='rounded-xl'
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {clinics.map(clinic => (
                  <Marker
                    key={clinic.id}
                    position={clinic.position}
                    icon={vetIcon}
                    eventHandlers={{
                      click: () => setSelectedClinic(clinic)
                    }}
                  >
                    <Popup>
                      <div className='p-2'>
                        <h3 className='font-bold text-lg mb-2'>
                          {clinic.name}
                        </h3>
                        <p className='text-sm mb-1'>📍 {clinic.address}</p>
                        <p className='text-sm mb-1'>📞 {clinic.phone}</p>
                        <p className='text-sm mb-1'>🕒 {clinic.hours}</p>
                        <p className='text-sm mb-2'>
                          ⭐ Rating: {clinic.rating}/5
                        </p>
                        <div className='flex flex-wrap gap-1 mb-3'>
                          {clinic.services.map((service, idx) => (
                            <span
                              key={idx}
                              className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded'
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <div className='flex gap-2'>
                          <button className='flex-1 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700'>
                            📞 Call
                          </button>
                          <button className='flex-1 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700'>
                            📍 Directions
                          </button>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Selected Clinic Details */}
            {selectedClinic && (
              <div className='mt-4 bg-white rounded-lg p-6 shadow-lg'>
                <div className='flex items-start justify-between'>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      {selectedClinic.name}
                    </h3>
                    <p className='text-gray-600 mb-1'>
                      📍 {selectedClinic.address}
                    </p>
                    <p className='text-gray-600 mb-1'>
                      📞 {selectedClinic.phone}
                    </p>
                    <p className='text-gray-600 mb-1'>
                      🕒 {selectedClinic.hours}
                    </p>
                    <p className='text-gray-600 mb-3'>
                      ⭐ Rating: {selectedClinic.rating}/5
                    </p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {selectedClinic.services.map((service, idx) => (
                        <span
                          key={idx}
                          className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full'
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedClinic(null)}
                    className='text-gray-400 hover:text-gray-600 ml-4'
                  >
                    ✕
                  </button>
                </div>
                <div className='flex space-x-3'>
                  <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200'>
                    📞 Call Now
                  </button>
                  <button className='flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200'>
                    📍 Get Directions
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VetMap
