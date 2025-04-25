'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  BookmarkIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Saved Jobs', href: '/saved-jobs', icon: BookmarkIcon },
    { name: 'Profile', href: '/profile', icon: UserIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col pt-5 pb-4">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <button
            onClick={() => console.log('Logout clicked')}
            className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 w-full"
          >
            <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 