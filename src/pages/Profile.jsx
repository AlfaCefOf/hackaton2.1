import React from 'react';
import { FiUser, FiMail, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-[#A8DADC] rounded-full flex items-center justify-center">
                <span className="text-[#2F3E46] font-bold text-2xl">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center text-[#2F3E46] mb-8">My Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* User Name */}
              <div className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#A8DADC] rounded-full flex items-center justify-center">
                  <FiUser className="text-[#2F3E46] text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Full Name</p>
                  <p className="text-[#2F3E46] font-semibold text-lg">{user.name}</p>
                </div>
              </div>

              {/* User Email */}
              <div className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#A8DADC] rounded-full flex items-center justify-center">
                  <FiMail className="text-[#2F3E46] text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Email Address</p>
                  <p className="text-[#2F3E46] font-semibold text-lg">{user.email}</p>
                </div>
              </div>

              {/* User ID */}
              <div className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#A8DADC] rounded-full flex items-center justify-center">
                  <span className="text-[#2F3E46] text-sm font-bold">ID</span>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">User ID</p>
                  <p className="text-[#2F3E46] font-semibold text-lg">{user.id}</p>
                </div>
              </div>

              {/* Account Status */}
              <div className="bg-green-50 rounded-lg p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <p className="text-green-600 text-sm font-medium">Account Status</p>
                  <p className="text-green-800 font-semibold text-lg">Active</p>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold text-[#2F3E46] mb-4">Account Actions</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex-1 flex items-center justify-center space-x-2">
                  <span>Edit Profile</span>
                </button>
                <button className="btn-secondary flex-1 flex items-center justify-center space-x-2">
                  <span>Change Password</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <FiLogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;