import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch, placeholder = "Search for lost items..." }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search logic later
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl shadow-2xl">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full px-6 py-4 pl-14 pr-4 rounded-2xl bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-lg font-medium"
          />
          <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;