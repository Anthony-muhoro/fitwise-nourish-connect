import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Profile', href: '/', icon: Home },
    { name: 'Meal Plans', href: '/meal-plans', icon: Calendar },
    { name: 'Coaches', href: '/coaches', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:relative md:border-t-0">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-around md:justify-center md:gap-12 py-3">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <main className="max-w-screen-xl mx-auto px-4 py-6 pb-24 md:pb-6 animate-fade-in">
        {children}
      </main>
    </div>
  );
};

export default Layout;