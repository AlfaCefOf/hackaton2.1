import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Home</Link>
            <Link to="/buy-pets" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Buy Pets</Link>
            <Link to="/adoption" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Adoption</Link>
            <Link to="/donations" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Donations</Link>
            <Link to="/vet-map" className="text-[#2F3E46] hover:text-[#A8DADC] transition-colors">Vet Map</Link>
          </div>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#2F3E46] hover:text-[#A8DADC] focus:outline-none focus:text-[#A8DADC] p-2"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-[#2F3E46] hover:text-[#A8DADC] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/buy-pets"
                className="block px-3 py-2 text-[#2F3E46] hover:text-[#A8DADC] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Buy Pets
              </Link>
              <Link
                to="/adoption"
                className="block px-3 py-2 text-[#2F3E46] hover:text-[#A8DADC] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Adoption
              </Link>
              <Link
                to="/donations"
                className="block px-3 py-2 text-[#2F3E46] hover:text-[#A8DADC] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Donations
              </Link>
              <Link
                to="/vet-map"
                className="block px-3 py-2 text-[#2F3E46] hover:text-[#A8DADC] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Vet Map
              </Link>

              {/* Mobile User Section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                {user ? (
                  <Link
                    to="/profile"
                    className="flex items-center px-3 py-2 text-[#2F3E46] hover:text-[#A8DADC] hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-6 h-6 bg-[#A8DADC] rounded-full flex items-center justify-center mr-3">
                      <span className="text-[#2F3E46] font-bold text-xs">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    {user.name}
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-[#2F3E46] hover:text-[#A8DADC] hover:bg-gray-50 rounded-md transition-colors font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;