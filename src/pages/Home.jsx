import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import ItemCard from '../components/ItemCard';
import items from '../data/items.json';

const Home = () => {
  const categories = ['Electronics', 'Accessories', 'Bags', 'Jewelry', 'Miscellaneous'];
  const latestItems = items.slice(0, 6);

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient and blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/15 rounded-full blur-lg animate-pulse delay-500"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Lost & Found
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-100 font-light leading-relaxed">
              Help reunite people with their lost belongings through our modern platform
            </p>

            <div className="max-w-2xl mx-auto mb-12">
              <SearchBar />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/report-lost"
                className="group px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Report Lost Item
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link
                to="/report-found"
                className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-white/25"
              >
                Report Found Item
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Search & Filter</h3>
                <p className="text-blue-100 text-sm">Find items quickly with advanced search</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
                <p className="text-blue-100 text-sm">Direct communication between finders and owners</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-white mb-2">Verified</h3>
                <p className="text-blue-100 text-sm">Secure platform with user verification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F7FA] dark:from-[#0F1629] to-transparent"></div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map(cat => <CategoryCard key={cat} category={cat} />)}
          </div>
        </div>
      </section>

      {/* Latest Items */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestItems.map(item => <ItemCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;