import { useParams } from 'react-router-dom';
import items from '../data/items.json';

const ItemDetails = () => {
  const { id } = useParams();
  const item = items.find(i => i.id === parseInt(id));

  if (!item) return <div>Item not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={item.image} alt={item.title} className="w-full rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-gray-600 mb-2">Category: {item.category}</p>
          <p className="text-gray-600 mb-2">Location: {item.location}</p>
          <p className="text-gray-600 mb-4">Date: {item.date}</p>
          <p className="text-gray-700 mb-6">{item.description}</p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Contact Owner</button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Report as Found</button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Location Map</h2>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <p>Map placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;