import React, { useState, useEffect } from 'react';
import { FiUsers, FiHeart, FiPlus, FiEdit, FiTrash2, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pets');
  const [pets, setPets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    location: 'Tashkent',
    price: 0,
    image: '',
    tags: [],
    badges: [],
    category: ''
  });

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || !user.name.toLowerCase().endsWith('admin')) {
      navigate('/');
      return;
    }
    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      const [petsRes, usersRes] = await Promise.all([
        fetch('http://localhost:5000/pets'),
        fetch('http://localhost:5000/users')
      ]);
      const petsData = await petsRes.json();
      const usersData = await usersRes.json();
      setPets(petsData);
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      type: '',
      breed: '',
      age: '',
      location: 'Tashkent',
      price: 0,
      image: '',
      tags: [],
      badges: [],
      category: ''
    });
    setShowAddModal(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setShowAddModal(true);
  };

  const handleDelete = async (id, type) => {
    if (window.confirm('Haqiqatan ham o\'chirmoqchimisiz?')) {
      try {
        await fetch(`http://localhost:5000/${type}/${id}`, {
          method: 'DELETE'
        });
        fetchData();
      } catch (error) {
        console.error('Error deleting:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingItem
        ? `http://localhost:5000/pets/${editingItem.id}`
        : 'http://localhost:5000/pets';

      const method = editingItem ? 'PUT' : 'POST';

      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setShowAddModal(false);
      fetchData();
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Yuklanmoqda...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <FiBarChart3 className="text-2xl text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Salom, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <FiLogOut size={16} />
                <span>Chiqish</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <FiHeart className="text-2xl text-red-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Jami hayvonlar</p>
                <p className="text-2xl font-semibold">{pets.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <FiUsers className="text-2xl text-blue-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Jami foydalanuvchilar</p>
                <p className="text-2xl font-semibold">{users.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <FiBarChart3 className="text-2xl text-green-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Faol admin</p>
                <p className="text-2xl font-semibold">1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('pets')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'pets'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Hayvonlar boshqaruvi
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'users'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Foydalanuvchilar boshqaruvi
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'pets' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Hayvonlar ro'yxati</h2>
                  <button
                    onClick={handleAdd}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    <FiPlus size={16} />
                    <span>Yangi hayvon qo'shish</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rasm</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nomi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Turi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Narxi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amallar</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pets.map((pet) => (
                        <tr key={pet.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <img src={pet.image} alt={pet.name} className="w-12 h-12 object-cover rounded" />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pet.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pet.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${pet.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleEdit(pet)}
                              className="text-blue-600 hover:text-blue-900 mr-3"
                            >
                              <FiEdit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(pet.id, 'pets')}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Foydalanuvchilar ro'yxati</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ismi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amallar</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleDelete(user.id, 'users')}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">
              {editingItem ? 'Hayvonni tahrirlash' : 'Yangi hayvon qo\'shish'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Hayvon nomi"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Turini tanlang</option>
                <option value="Dog">It</option>
                <option value="Cat">Mushuk</option>
                <option value="Bird">Qush</option>
              </select>
              <input
                type="text"
                placeholder="Zoti"
                value={formData.breed}
                onChange={(e) => setFormData({...formData, breed: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Yoshi"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Narxi"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="url"
                placeholder="Rasm URL"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  {editingItem ? 'Saqlash' : 'Qo\'shish'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Bekor qilish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;