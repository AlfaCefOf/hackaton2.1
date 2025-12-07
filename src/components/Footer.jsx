import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2F3E46] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#A8DADC] rounded-full flex items-center justify-center">
                <span>🐾</span>
              </div>
              <span className="text-xl font-bold">Pet Tashkent</span>
            </div>
            <p className="text-gray-300">Connecting Tashkent through Pets</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#A8DADC] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A8DADC] transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A8DADC] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A8DADC] transition-colors">Animal Welfare Rules</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#A8DADC] transition-colors">📘 Facebook</a>
              <a href="#" className="text-gray-300 hover:text-[#A8DADC] transition-colors">📷 Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@pettashkent.uz</p>
            <p className="text-gray-300">Phone: +998 71 123 4567</p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Pet Tashkent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;