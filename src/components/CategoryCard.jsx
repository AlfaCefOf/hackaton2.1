import { FaLaptop, FaWallet, FaBriefcase, FaGem, FaQuestion } from 'react-icons/fa';

const CategoryCard = ({ category }) => {
  const icons = {
    Electronics: FaLaptop,
    Accessories: FaWallet,
    Bags: FaBriefcase,
    Jewelry: FaGem,
    Miscellaneous: FaQuestion
  };

  const gradients = {
    Electronics: 'from-blue-500 to-cyan-500',
    Accessories: 'from-purple-500 to-pink-500',
    Bags: 'from-green-500 to-emerald-500',
    Jewelry: 'from-yellow-500 to-orange-500',
    Miscellaneous: 'from-gray-500 to-slate-500'
  };

  const Icon = icons[category] || FaQuestion;
  const gradient = gradients[category] || 'from-gray-500 to-slate-500';

  return (
    <div className="group relative bg-white dark:bg-white/5 backdrop-blur-lg p-8 rounded-3xl shadow-lg shadow-blue-800/10 dark:shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 hover:scale-105 transition-all duration-500 cursor-pointer border border-white/20 dark:border-gray-700/50">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

      <div className="relative text-center">
        <div className={`bg-gradient-to-br ${gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
          <Icon className="text-3xl text-white drop-shadow-lg" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {category}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Browse {category.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;