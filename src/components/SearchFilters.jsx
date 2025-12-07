import React from 'react';

const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  ageRange,
  setAgeRange,
  gender,
  setGender,
  petType,
  setPetType
}) => {
  const categories = ['Itlar', 'Mushuklar', 'Qushlar', 'Sudralib yuruvchilar', 'Boshqa hayvonlar'];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2F3E46] mb-4">O'zingizga mos hayvonni toping</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Zot, tur, shahar tumani bo'yicha qidiring"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
            />
          </div>
          <button className="btn-primary px-6 py-3">Qidirish</button>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-[#A8DADC] text-[#2F3E46]'
                  : 'bg-gray-100 text-[#2F3E46] hover:bg-[#A8DADC]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300"
          >
            <option value="">Narx</option>
            <option value="0-100">$0 - $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500+">$500+</option>
          </select>
          <select
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300"
          >
            <option value="">Yosh</option>
            <option value="puppy">Kuchukcha/Mushukcha</option>
            <option value="adult">Kattalar</option>
            <option value="senior">Keksalar</option>
          </select>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300"
          >
            <option value="">Jins</option>
            <option value="male">Erkak</option>
            <option value="female">Urg'ochi</option>
          </select>
          <select
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300"
          >
            <option value="">Tur</option>
            <option value="shelter">Boshpana</option>
            <option value="private">Shaxsiy egasi</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;