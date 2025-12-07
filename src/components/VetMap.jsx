import React, { useState } from 'react';

const VetMap = () => {
  const clinics = [
    {
      id: 1,
      name: "Vet Clinic 1",
      address: "123 Main St, Tashkent",
      rating: 4.5,
      services: ["Vaccinations", "Surgery"]
    },
    {
      id: 2,
      name: "Vet Clinic 2",
      address: "456 Elm St, Tashkent",
      rating: 4.8,
      services: ["Checkups", "Emergency"]
    }
  ];

  const [selectedClinic, setSelectedClinic] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2F3E46] text-center mb-8">Find Nearby Vet Clinics</h2>
        <div className="relative bg-[#A8DADC]/20 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-[#2F3E46]">Interactive Map of Tashkent Vet Clinics</p>
          </div>
          <div className="absolute top-4 left-4 space-y-2">
            {clinics.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white rounded-lg p-3 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedClinic(clinic)}
              >
                <div className="w-4 h-4 bg-[#F4A261] rounded-full mb-2"></div>
                <p className="text-sm font-semibold">{clinic.name}</p>
              </div>
            ))}
          </div>
          {selectedClinic && (
            <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg max-w-sm">
              <h3 className="font-semibold text-[#2F3E46] mb-2">{selectedClinic.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{selectedClinic.address}</p>
              <p className="text-sm text-gray-600 mb-2">Rating: {selectedClinic.rating} ⭐</p>
              <p className="text-sm text-gray-600 mb-4">Services: {selectedClinic.services.join(', ')}</p>
              <button className="btn-primary w-full">Call Clinic</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VetMap;