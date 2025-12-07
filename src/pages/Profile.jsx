import React from 'react';
import { FiUser, FiMail, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="auth-card bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-md mx-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">User Profile</h2>

        <div className="space-y-6">
          {/* User Name */}
          <div className="bg-white/20 rounded-lg p-4 flex items-center space-x-4">
            <FiUser className="text-white/70 text-xl" />
            <div>
              <p className="text-white/70 text-sm">Full Name</p>
              <p className="text-white font-semibold">{user.name}</p>
            </div>
          </div>

          {/* User Email */}
          <div className="bg-white/20 rounded-lg p-4 flex items-center space-x-4">
            <FiMail className="text-white/70 text-xl" />
            <div>
              <p className="text-white/70 text-sm">Email Address</p>
              <p className="text-white font-semibold">{user.email}</p>
            </div>
          </div>

          {/* User ID */}
          <div className="bg-white/20 rounded-lg p-4 flex items-center space-x-4">
            <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">ID</span>
            </div>
            <div>
              <p className="text-white/70 text-sm">User ID</p>
              <p className="text-white font-semibold">{user.id}</p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <FiLogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;