import React from 'react';

const DonationSection = () => {
  const shelters = [
    {
      id: 1,
      name: "Tashkent Animal Shelter",
      location: "Tashkent",
      animals: 50,
      needs: "Food and medicine",
      progress: 70
    },
    {
      id: 2,
      name: "Pet Rescue Center",
      location: "Tashkent",
      animals: 30,
      needs: "Vaccinations",
      progress: 40
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2F3E46] text-center mb-8">Support Animal Shelters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shelters.map((shelter) => (
            <div key={shelter.id} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-[#2F3E46] mb-2">{shelter.name}</h3>
              <p className="text-gray-600 mb-1">{shelter.location}</p>
              <p className="text-gray-600 mb-1">{shelter.animals} animals</p>
              <p className="text-gray-600 mb-4">Urgent needs: {shelter.needs}</p>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#F4A261] h-2 rounded-full" style={{width: `${shelter.progress}%`}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{shelter.progress}% funded</p>
              </div>
              <button className="btn-accent w-full">Donate to Shelter</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;