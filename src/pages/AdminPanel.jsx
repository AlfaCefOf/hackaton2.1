import { useAuth } from '../context/AuthContext';
import users from '../data/users.json';
import items from '../data/items.json';

const AdminPanel = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') return <div>Access denied</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Users</h3>
          <ul>
            {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Items for Approval</h3>
          <ul>
            {items.map(item => <li key={item.id}>{item.title} - {item.status}</li>)}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Stats</h3>
          <p>Total Items: {items.length}</p>
          <p>Lost: {items.filter(i => i.status === 'lost').length}</p>
          <p>Found: {items.filter(i => i.status === 'found').length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;