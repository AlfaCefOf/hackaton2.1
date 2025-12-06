const Help = () => {
  const helpTopics = [
    {
      title: "Getting Started",
      icon: "🚀",
      content: "Learn the basics of using Lost & Found to report and find items."
    },
    {
      title: "Reporting Items",
      icon: "📝",
      content: "Step-by-step guide on how to report lost or found items effectively."
    },
    {
      title: "Searching & Filtering",
      icon: "🔍",
      content: "Tips for finding items using our search and filter features."
    },
    {
      title: "Safety Guidelines",
      icon: "🛡️",
      content: "Important safety tips when meeting someone to exchange items."
    },
    {
      title: "Account Management",
      icon: "👤",
      content: "Manage your profile, notifications, and account settings."
    },
    {
      title: "Contact & Support",
      icon: "💬",
      content: "How to get help when you need it."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Help Center</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Find guides, tips, and answers to your questions</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {helpTopics.map((topic, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-4">{topic.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{topic.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{topic.content}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Need Personal Assistance?</h2>
        <p className="text-xl mb-6 opacity-90">
          Our support team is available to help you with any questions or issues.
        </p>
        <div className="space-x-4">
          <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Support
          </a>
          <a href="tel:+15551235678" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            Call Us
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Tips</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
              Take clear photos of your lost items
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
              Provide detailed descriptions including unique identifiers
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
              Check your dashboard regularly for matches
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
              Meet in public places for item exchanges
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Popular Articles</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">How to write effective item descriptions</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Understanding our matching algorithm</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy and safety best practices</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Managing your notifications</a>
            </li>
            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Troubleshooting common issues</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;