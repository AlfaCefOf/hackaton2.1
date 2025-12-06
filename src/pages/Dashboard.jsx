import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import DashboardSidebar from '../components/DashboardSidebar';
import ItemCard from '../components/ItemCard';
import items from '../data/items.json';

const Dashboard = () => {
  const { user } = useAuth();
  const [active, setActive] = useState('lost');

  if (!user) return <div>Please login first</div>;

  const myLostItems = items.filter(item => item.status === 'lost');
  const myFoundItems = items.filter(item => item.status === 'found');

  const renderContent = () => {
    switch (active) {
      case 'lost':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">My Lost Items</h3>
            {myLostItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myLostItems.map(item => <ItemCard key={item.id} item={item} />)}
              </div>
            ) : (
              <p className="text-center py-10 text-gray-500">No lost items reported yet. <a href="/report-lost" className="text-blue-600 hover:underline">Report one now</a></p>
            )}
          </div>
        );
      case 'found':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">My Found Items</h3>
            {myFoundItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myFoundItems.map(item => <ItemCard key={item.id} item={item} />)}
              </div>
            ) : (
              <p className="text-center py-10 text-gray-500">No found items reported yet. <a href="/report-found" className="text-blue-600 hover:underline">Report one now</a></p>
            )}
          </div>
        );
      case 'messages':
        return <div className="text-center py-20">Messages placeholder</div>;
      case 'notifications':
        return <div className="text-center py-20">Notifications placeholder</div>;
      case 'profile':
        return (
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4">Profile Settings</h3>
            <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Update Profile</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar active={active} setActive={setActive} />
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;