import EmployeeLayout from "../EmployeeLayout";
import React from "react";

export default function EmployeeProfilePage() {
  return (
    <EmployeeLayout>
      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start">
            <div className="text-gray-500 text-sm mb-1">Jobs Posted</div>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-xs text-gray-400 mt-1">3 active jobs</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start">
            <div className="text-gray-500 text-sm mb-1">Referrals Made</div>
            <div className="text-2xl font-bold text-gray-900">28</div>
            <div className="text-xs text-gray-400 mt-1">8 hired candidates</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start">
            <div className="text-gray-500 text-sm mb-1">Pending Requests</div>
            <div className="text-2xl font-bold text-gray-900">7</div>
            <div className="text-xs text-gray-400 mt-1">Awaiting your action</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start">
            <div className="text-gray-500 text-sm mb-1">Bonuses Earned</div>
            <div className="text-2xl font-bold text-gray-900">$5,200</div>
            <div className="text-xs text-gray-400 mt-1">From 5 successful hires</div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold text-gray-900">Personal Information</div>
            <button className="flex items-center text-blue-600 text-sm font-medium hover:underline">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M3 17v4h4l10.293-10.293a1 1 0 000-1.414l-3.586-3.586a1 1 0 00-1.414 0L3 17z" /></svg>
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            <div className="flex flex-col items-center col-span-1">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-5xl mb-2 relative">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75A2.25 2.25 0 0117.25 22.5h-10.5A2.25 2.25 0 014.5 20.25v-.75z" /></svg>
                <button className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full p-1 border-2 border-white shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M3 17v4h4l10.293-10.293a1 1 0 000-1.414l-3.586-3.586a1 1 0 00-1.414 0L3 17z" /></svg>
                </button>
              </div>
              <div className="text-xs text-gray-500">Upload a profile picture</div>
            </div>
            <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Full Name</label>
                <input type="text" value="Michael Thompson" readOnly className="w-full border border-gray-200 rounded-md px-3 py-2 bg-gray-50" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Email Address</label>
                <input type="text" value="michael.thompson@example.com" readOnly className="w-full border border-gray-200 rounded-md px-3 py-2 bg-gray-50" />
                <div className="text-xs text-gray-400 mt-1">Email cannot be changed (used for login)</div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Phone Number</label>
                <input type="text" value="+91 8074757842" readOnly className="w-full border border-gray-200 rounded-md px-3 py-2 bg-gray-50" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">LinkedIn Profile</label>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md border border-gray-200 text-xs text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 01-12 0V6a6 6 0 0112 0v2zm0 0v2a6 6 0 01-12 0V8m12 0a6 6 0 01-12 0" /></svg>
                    https://linkedin.com/in/michaelthompson
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold text-gray-900">Professional Information</div>
            <button className="flex items-center text-blue-600 text-sm font-medium hover:underline">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M3 17v4h4l10.293-10.293a1 1 0 000-1.414l-3.586-3.586a1 1 0 00-1.414 0L3 17z" /></svg>
              Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Job Title / Role</label>
              <input type="text" value="Senior Software Engineer" readOnly className="w-full border border-gray-200 rounded-md px-3 py-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Department</label>
              <input type="text" value="Engineering" readOnly className="w-full border border-gray-200 rounded-md px-3 py-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Years of Experience</label>
              <input type="text" value="8" readOnly className="w-full border border-gray-200 rounded-md px-3 py-2 bg-gray-50" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Current Company</label>
              <input type="text" value="TechCorp Inc." readOnly className="w-full border border-gray-200 rounded-md px-3 py-2 bg-gray-50" />
            </div>
            <div className="col-span-4">
              <label className="block text-xs text-gray-500 mb-1">Skills / Expertise</label>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">React</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Node.js</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">AWS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Account Verification */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-lg font-semibold text-gray-900 mb-4">Account Verification</div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-green-100 text-green-700 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
            </span>
            <div className="font-medium text-green-700">Verified Employee <span className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">Verified</span></div>
          </div>
          <div className="text-gray-700 mb-1">Your account has been verified as an employee at TechCorp Inc.</div>
          <div className="text-xs text-gray-400">Verified on April 15, 2025</div>
        </div>
      </div>
    </EmployeeLayout>
  );
} 