'use client';

import Link from 'next/link';

const ProfileCompletion = () => {
  const completedItems = 5;
  const totalItems = 7;
  const completionPercentage = Math.round((completedItems / totalItems) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Profile Completion</h2>
        <Link
          href="/profile"
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Complete Profile
        </Link>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">{completionPercentage}% Complete</span>
          <span className="text-gray-500">
            {completedItems} of {totalItems} items completed
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion; 