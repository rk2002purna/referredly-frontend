'use client';

import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search jobs by title or company"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="md:w-72 relative">
        <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Filter by location"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <select
        className="md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        defaultValue="all"
      >
        <option value="all">All Types</option>
        <option value="full-time">Full Time</option>
        <option value="part-time">Part Time</option>
        <option value="contract">Contract</option>
        <option value="remote">Remote</option>
      </select>
    </div>
  );
};

export default SearchBar; 