const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Lost & Found</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Helping reunite people with their lost belongings</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We believe that every lost item has a story and deserves a happy ending. Our platform connects
            people who have lost items with those who have found them, making the reunion process simple and efficient.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Since our founding, we've helped thousands of people recover their lost belongings, from sentimental
            heirlooms to everyday essentials.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop"
            alt="People helping each other"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Report Lost Item</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Describe your lost item with details and photos</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Search & Match</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Our system matches lost items with found reports</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Reunite</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Connect directly with the finder to recover your item</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Join Our Community</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Help make the world a little better by reporting found items and claiming lost ones.
        </p>
        <div className="space-x-4">
          <a href="/report-lost" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Report Lost Item
          </a>
          <a href="/report-found" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Report Found Item
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;