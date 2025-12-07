import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#A8DADC]/20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#F4A261]/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 bg-[#F1FAEE]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#A8DADC]/20 rounded-full animate-ping"></div>
      </div>
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-[#2F3E46] mb-6">
          Connecting Tashkent through Pets
        </h1>
        <p className="text-xl md:text-2xl text-[#2F3E46]/80 mb-8">
          Buy, Adopt, Donate & Care
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-3">Browse Pets</button>
          <button className="btn-secondary text-lg px-8 py-3">Find Nearby Vets</button>
        </div>
      </div>

      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">🐶</div>
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">🐱</div>
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">🦜</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;