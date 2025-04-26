"use client";
import { FC, useState, useRef, useEffect, ReactNode } from "react";
import Link from "next/link";
import {
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Dashboard", href: "/dashboard/employee", icon: HomeIcon },
  { name: "My Job Posts", href: "/dashboard/employee/my-job-posts", icon: BriefcaseIcon },
  { name: "Referral Requests", href: "/dashboard/employee/referral-requests", icon: UserGroupIcon },
  { name: "My Referrals", href: "/dashboard/employee/my-referrals", icon: UserGroupIcon },
];

interface EmployeeLayoutProps {
  children: ReactNode;
}

const EmployeeLayout: FC<EmployeeLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Responsive Sidebar */}
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity lg:hidden ${sidebarOpen ? "block" : "hidden"}`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        className={`fixed z-50 inset-y-0 left-0 bg-white shadow-lg flex flex-col min-h-screen transform transition-transform duration-200 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full"} ${sidebarCollapsed ? "lg:w-20" : "lg:w-64"} w-64 lg:block`}
      >
        <div className={`h-20 flex items-center justify-between px-6 ${sidebarCollapsed ? "lg:px-2" : ""}`}>
          <span className={`text-2xl font-bold text-blue-600 font-cursive transition-all duration-200 ${sidebarCollapsed ? "lg:hidden" : ""}`}>Referredly</span>
          <button className="lg:hidden p-2" onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
          <button
            className={`hidden lg:inline-flex items-center justify-center p-2 rounded hover:bg-gray-100 transition-colors ${sidebarCollapsed ? "mx-auto" : ""}`}
            onClick={() => setSidebarCollapsed((c) => !c)}
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? <ChevronRightIcon className="h-5 w-5 text-gray-500" /> : <ChevronLeftIcon className="h-5 w-5 text-gray-500" />}
          </button>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors ${sidebarCollapsed ? "justify-center px-2" : ""}`}
            >
              <item.icon className="mr-3 h-5 w-5 text-blue-600" />
              <span className={`${sidebarCollapsed ? "hidden lg:block" : "inline"} transition-all duration-200`}>{item.name}</span>
            </Link>
          ))}
        </nav>
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((open) => !open)}
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="User menu"
              >
                M
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link href="/dashboard/employee/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <UserIcon className="h-5 w-5 mr-2 text-blue-600" /> Profile
                  </Link>
                  <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Cog6ToothIcon className="h-5 w-5 mr-2 text-blue-600" /> Settings
                  </Link>
                  <button
                    onClick={() => console.log("Logout clicked")}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2 text-blue-600" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        {/* Desktop Header */}
        <header className="hidden lg:flex justify-between items-center px-8 py-4 bg-white shadow-md">
          <div>
            <h1 className="text-xl font-semibold">Welcome, Michael</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-xs font-medium">Verified Employee</span>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((open) => !open)}
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="User menu"
              >
                M
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link href="/dashboard/employee/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <UserIcon className="h-5 w-5 mr-2 text-blue-600" /> Profile
                  </Link>
                  <Link href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Cog6ToothIcon className="h-5 w-5 mr-2 text-blue-600" /> Settings
                  </Link>
                  <button
                    onClick={() => console.log("Logout clicked")}
                    className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2 text-blue-600" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        {/* Main Page Content */}
        {children}
      </main>
    </div>
  );
};

export default EmployeeLayout; 