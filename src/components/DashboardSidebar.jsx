const DashboardSidebar = ({ active, setActive }) => {
  const menuItems = [
    { key: 'lost', label: 'My Lost Items', icon: '🔍' },
    { key: 'found', label: 'My Found Items', icon: '✅' },
    { key: 'messages', label: 'Messages', icon: '💬' },
    { key: 'notifications', label: 'Notifications', icon: '🔔' },
    { key: 'profile', label: 'Profile Settings', icon: '👤' }
  ];

  return (
    <div className="w-80 bg-white/10 dark:bg-gray-900/20 backdrop-blur-lg p-6 min-h-screen border-r border-white/20 dark:border-gray-700/50">
      <div className="mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Manage your items and account</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map(item => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
              active === item.key
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                : 'hover:bg-white/10 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:scale-105'
            }`}
          >
            {/* Background glow for active item */}
            {active === item.key && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl"></div>
            )}

            <div className="relative flex items-center space-x-3">
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {active === item.key && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </div>

            {/* Hover effect line */}
            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-300 ${
              active === item.key ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </button>
        ))}
      </nav>

      <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Stats</h3>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex justify-between">
            <span>Active Items:</span>
            <span className="font-medium text-blue-600 dark:text-blue-400">3</span>
          </div>
          <div className="flex justify-between">
            <span>Messages:</span>
            <span className="font-medium text-green-600 dark:text-green-400">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;