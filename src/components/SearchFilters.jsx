import React, { useState } from 'react';

const SearchFilters = () => {
  const [search, setSearch] = useState('');
  const categories = ['Dogs', 'Cats', 'Birds', 'Reptiles', 'Other Pets'];
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#2F3E46] mb-4">Find Your Perfect Pet</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by breed, type, city district"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
            />
          </div>
          <button className="btn-primary px-6 py-3">Search</button>
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
          <select className="px-3 py-2 rounded-lg border border-gray-300">
            <option>Price</option>
            <option>$0 - $100</option>
            <option>$100 - $500</option>
          </select>
          <select className="px-3 py-2 rounded-lg border border-gray-300">
            <option>Age</option>
            <option>Puppy/Kitten</option>
            <option>Adult</option>
          </select>
          <select className="px-3 py-2 rounded-lg border border-gray-300">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select className="px-3 py-2 rounded-lg border border-gray-300">
            <option>Type</option>
            <option>Shelter</option>
            <option>Private Owner</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;