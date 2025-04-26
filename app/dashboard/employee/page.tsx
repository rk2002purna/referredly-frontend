'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', href: '#', icon: HomeIcon },
  { name: 'My Job Posts', href: '#', icon: BriefcaseIcon },
  { name: 'Referral Requests', href: '#', icon: UserGroupIcon },
  { name: 'My Referrals', href: '#', icon: UserGroupIcon },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon },
];

const EmployeeDashboard: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Responsive Sidebar */}
      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)} />
      <aside
        className={`fixed z-50 inset-y-0 left-0 bg-white shadow-lg flex flex-col min-h-screen transform transition-transform duration-200 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'} ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'} w-64 lg:block`}
      >
        <div className={`h-20 flex items-center justify-between px-6 ${sidebarCollapsed ? 'lg:px-2' : ''}`}>
          <span className={`text-2xl font-bold text-blue-600 font-cursive transition-all duration-200 ${sidebarCollapsed ? 'lg:hidden' : ''}`}>Referredly</span>
          <button className="lg:hidden p-2" onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
          <button
            className={`hidden lg:inline-flex items-center justify-center p-2 rounded hover:bg-gray-100 transition-colors ${sidebarCollapsed ? 'mx-auto' : ''}`}
            onClick={() => setSidebarCollapsed((c) => !c)}
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {sidebarCollapsed ? <ChevronRightIcon className="h-5 w-5 text-gray-500" /> : <ChevronLeftIcon className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors ${sidebarCollapsed ? 'justify-center px-2' : ''}`}
            >
              <item.icon className="mr-3 h-5 w-5 text-blue-600" />
              <span className={`${sidebarCollapsed ? 'hidden lg:block' : 'inline'} transition-all duration-200`}>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className={`flex-shrink-0 flex p-4 ${sidebarCollapsed ? 'justify-center px-2' : ''}`}>
          <button
            onClick={() => console.log('Logout clicked')}
            className={`flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 w-full ${sidebarCollapsed ? 'justify-center' : ''}`}
          >
            <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            <span className={`${sidebarCollapsed ? 'hidden lg:block' : 'inline'} transition-all duration-200`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Mobile Topbar */}
        <header className="flex justify-between items-center px-4 py-4 bg-white shadow-md lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="p-2">
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-xs font-medium">Verified Employee</span>
            <div className="flex items-center space-x-2">
              <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-700">M</span>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">Michael Thompson</span>
                <span className="text-xs text-gray-500">Senior Engineer at Google</span>
              </div>
            </div>
          </div>
        </header>
        {/* Desktop Header */}
        <header className="hidden lg:flex justify-between items-center px-8 py-6 bg-white shadow-md">
          <div>
            <h1 className="text-xl font-semibold">Welcome, Michael</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-xs font-medium">Verified Employee</span>
            <div className="flex items-center space-x-2">
              <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-700">M</span>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">Michael Thompson</span>
                <span className="text-xs text-gray-500">Senior Engineer at Google</span>
              </div>
            </div>
          </div>
        </header>

        {/* Success Banner */}
        <div className="bg-green-50 border border-green-200 text-green-800 px-8 py-3 flex items-center justify-between rounded-lg shadow-sm mt-6 mx-8">
          <span>Your employee account has been verified. You can now post jobs and refer candidates.</span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="text-gray-500 text-sm mb-1">Jobs Posted</div>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-xs text-gray-400 mt-1">3 active jobs</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="text-gray-500 text-sm mb-1">Referrals Made</div>
              <div className="text-2xl font-bold text-gray-900">28</div>
              <div className="text-xs text-gray-400 mt-1">8 hired candidates</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="text-gray-500 text-sm mb-1">Pending Requests</div>
              <div className="text-2xl font-bold text-gray-900">7</div>
              <div className="text-xs text-gray-400 mt-1">Awaiting your action</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="text-gray-500 text-sm mb-1">Bonuses Earned</div>
              <div className="text-2xl font-bold text-gray-900">$5,200</div>
              <div className="text-xs text-gray-400 mt-1">From 5 successful hires</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3 px-8 mb-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">+ Post New Job</button>
          <button className="bg-white border px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100">View Referral Requests</button>
          <button className="bg-white border px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100">My Referrals</button>
        </div>

        {/* Recent Referral Requests */}
        <section className="px-8 mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Recent Referral Requests</h2>
            <Link href="#" className="text-blue-600 text-sm hover:underline">View All</Link>
          </div>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            <div className="flex items-center px-6 py-4">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-base font-bold text-blue-700 mr-4">R</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Rachel Adams</div>
                <div className="text-xs text-gray-500">rachel.adams@gmail.com</div>
              </div>
              <div className="w-48 text-gray-700">Senior Software Engineer</div>
              <div className="w-24 text-gray-700">6 years</div>
              <div className="w-32 text-gray-500">Apr 23, 2025</div>
              <div className="flex gap-2 ml-4">
                <button className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md font-medium hover:bg-blue-100">Review Profile</button>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium hover:bg-gray-200">Decline</button>
              </div>
            </div>
            <div className="flex items-center px-6 py-4">
              <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-base font-bold text-green-700 mr-4">J</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Jason Martinez</div>
                <div className="text-xs text-gray-500">jason.martinez@outlook.com</div>
              </div>
              <div className="w-48 text-gray-700">Product Manager</div>
              <div className="w-24 text-gray-700">8 years</div>
              <div className="w-32 text-gray-500">Apr 22, 2025</div>
              <div className="flex gap-2 ml-4">
                <button className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md font-medium hover:bg-blue-100">Review Profile</button>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium hover:bg-gray-200">Decline</button>
              </div>
            </div>
            <div className="flex items-center px-6 py-4">
              <span className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-base font-bold text-yellow-700 mr-4">S</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Sophia Chen</div>
                <div className="text-xs text-gray-500">sophia.chen@gmail.com</div>
              </div>
              <div className="w-48 text-gray-700">Data Scientist</div>
              <div className="w-24 text-gray-700">4 years</div>
              <div className="w-32 text-gray-500">Apr 21, 2025</div>
              <div className="flex gap-2 ml-4">
                <button className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md font-medium hover:bg-blue-100">Review Profile</button>
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium hover:bg-gray-200">Decline</button>
              </div>
            </div>
          </div>
        </section>

        {/* My Active Job Posts */}
        <section className="px-8 pb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-900">My Active Job Posts</h2>
            <Link href="#" className="text-blue-600 text-sm hover:underline">View All</Link>
          </div>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            <div className="flex items-center px-6 py-4">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-700 mr-4">G</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Senior Software Engineer</div>
                <div className="text-xs text-gray-500">Mountain View, CA • Hybrid</div>
              </div>
              <div className="w-40 text-gray-700">$150K - $200K</div>
              <div className="w-24 text-gray-500">Active</div>
              <div className="w-32 text-gray-500">Posted on Apr 15, 2025</div>
              <div className="flex gap-2 ml-4">
                <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-md font-medium hover:bg-gray-100">Edit Post</button>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-2 ml-2">18 referral requests</div>
        </section>
      </main>
    </div>
  );
};

export default EmployeeDashboard; 