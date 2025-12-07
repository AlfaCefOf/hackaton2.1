import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#A8DADC] rounded-full flex items-center justify-center">
                <span className="text-[#2F3E46] font-bold">🐾</span>
              </div>
              <span className="text-xl font-bold text-[#2F3E46]">Pet Tashkent</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Home</Link>
            <Link to="/buy-pets" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Buy Pets</Link>
            <Link to="/adoption" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Adoption</Link>
            <Link to="/donations" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Donations</Link>
            <Link to="/vet-map" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Vet Map</Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors font-semibold">
                  {user.name}
                </Link>
                <div className="w-8 h-8 bg-[#A8DADC] rounded-full flex items-center justify-center">
                  <span className="text-[#2F3E46] font-bold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-accent">Login</Link>
                <div className="w-8 h-8 bg-[#F1FAEE] rounded-full flex items-center justify-center relative">
                  <span className="text-[#2F3E46]">👤</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;