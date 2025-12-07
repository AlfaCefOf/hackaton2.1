import React from 'react';

const AdoptionFoster = () => {
  const stories = [
    {
      id: 1,
      name: "Luna",
      story: "Rescued from the streets, Luna is looking for a loving home.",
      image: "🐕"
    },
    {
      id: 2,
      name: "Mittens",
      story: "Abandoned kitten, needs temporary care.",
      image: "🐱"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2F3E46] text-center mb-8">Adoption & Foster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((pet) => (
            <div key={pet.id} className="bg-[#F1FAEE] rounded-lg p-6 shadow-md">
              <div className="text-6xl mb-4">{pet.image}</div>
              <h3 className="text-xl font-semibold text-[#2F3E46] mb-2">Meet {pet.name}</h3>
              <p className="text-[#2F3E46]/80 mb-4">{pet.story}</p>
              <div className="flex gap-2">
                <button className="btn-primary">Meet this Pet</button>
                <button className="btn-accent">Adopt for Free</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptionFoster;