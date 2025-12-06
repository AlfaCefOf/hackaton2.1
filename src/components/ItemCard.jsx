import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <div className="group relative bg-white dark:bg-white/5 backdrop-blur-lg rounded-3xl shadow-lg shadow-blue-800/10 dark:shadow-blue-900/20 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 hover:scale-[1.02] transition-all duration-500 border border-white/20 dark:border-gray-700/50">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border ${
            item.status === 'lost'
              ? 'bg-red-500/90 text-white border-red-400/50 shadow-lg shadow-red-500/25'
              : 'bg-emerald-500/90 text-white border-emerald-400/50 shadow-lg shadow-emerald-500/25'
          }`}>
            {item.status.toUpperCase()}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-md border border-white/20 dark:border-gray-700/50">
            {item.category}
          </span>
        </div>
      </div>

      <div className="relative p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {item.title}
        </h3>

        <div className="space-y-2 mb-4">
          <p className="text-gray-600 dark:text-gray-300 flex items-center text-sm">
            <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {item.date}
          </p>
        </div>

        <Link
          to={`/item/${item.id}`}
          className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 group/btn"
        >
          View Details
          <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;