import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, Menu, X } from 'lucide-react';
import { UserButton } from '@clerk/clerk-react';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Meal Plans', href: '/meal-plans', icon: Calendar },
    { name: 'Coaches', href: '/coaches', icon: Users },
  ];

  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-md transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 sm:hidden lg:translate-x-0 lg:block`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-blue-900">FitWise Connect</h2>
          {/* Close button for small devices only */}
          <button
            className="text-blue-800 sm:block lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === item.href
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-blue-800 hover:bg-blue-50'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for Sidebar on small devices */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Header */}
        <header className="fixed top-0 z-10 w-full bg-white border-b shadow-sm">
          <div className="flex items-center justify-between px-4 h-14 lg:px-8">
            {/* Menu Icon for small devices */}
            <p></p>
            <button
              className="text-blue-800 sm:block lg:hidden"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex items-center space-x-4 ml-auto lg:ml-0">
              <UserButton />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main
          className={`flex-1 pt-16 space-y-4 p-4 md:p-8 lg:pt-16 lg:ml-64 ${
            isSidebarOpen ? 'lg:ml-64' : ''
          } transition-all duration-300`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
