'use client';
import EmployeeLayout from "../EmployeeLayout";
import React, { useState } from "react";

export default function EmployeeSettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [newReferralRequests, setNewReferralRequests] = useState(true);
  const [statusUpdates, setStatusUpdates] = useState(true);
  const [showFullName, setShowFullName] = useState(true);
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [hideEmail, setHideEmail] = useState(true);
  const [allowDirect, setAllowDirect] = useState(true);
  const [shareStats, setShareStats] = useState(true);

  // Toggle Switch Component
  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${checked ? 'bg-blue-600' : 'bg-gray-200'}`}
      role="switch"
      aria-checked={checked}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-1'}`}
      />
    </button>
  );

  return (
    <EmployeeLayout>
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="text-lg font-semibold mb-4">Account Settings</div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Change Password</label>
            <input type="password" placeholder="Enter new password" className="w-full border border-gray-200 rounded-md px-3 py-2 mb-2" />
            <label className="block text-sm mb-1">Current Password</label>
            <input type="password" placeholder="Enter current password" className="w-full border border-gray-200 rounded-md px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Update Contact Number</label>
            <input type="text" placeholder="+1 (555) 123-4567" className="w-full border border-gray-200 rounded-md px-3 py-2" />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <div className="flex-1">
              <label className="block text-sm mb-1">Manage Email Address</label>
              <input type="email" value="michael.j@company.com" className="w-full border border-gray-200 rounded-md px-3 py-2" readOnly />
              <div className="text-xs text-gray-400 mt-1">Email change requires verification</div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium mt-6">Verify Email</button>
          </div>
        </div>

        {/* Communication Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="text-lg font-semibold mb-4">Communication Settings</div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <Toggle checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
            </div>
            <div className="flex items-center justify-between">
              <span>New Referral Requests</span>
              <Toggle checked={newReferralRequests} onChange={() => setNewReferralRequests(!newReferralRequests)} />
            </div>
            <div className="flex items-center justify-between">
              <span>Application Status Updates</span>
              <Toggle checked={statusUpdates} onChange={() => setStatusUpdates(!statusUpdates)} />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="text-lg font-semibold mb-4">Privacy Settings</div>
          <div className="mb-4">
            <div className="font-medium mb-2">Profile Visibility</div>
            <div className="flex items-center justify-between mb-2">
              <span>Show my full name to jobseekers</span>
              <Toggle checked={showFullName} onChange={() => setShowFullName(!showFullName)} />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Show my LinkedIn profile to jobseekers</span>
              <Toggle checked={showLinkedIn} onChange={() => setShowLinkedIn(!showLinkedIn)} />
            </div>
          </div>
          <div className="mb-4">
            <div className="font-medium mb-2">Contact Info Visibility</div>
            <div className="flex items-center justify-between mb-2">
              <span>Hide personal email ID from referred candidates</span>
              <Toggle checked={hideEmail} onChange={() => setHideEmail(!hideEmail)} />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span>Allow direct messaging from jobseekers</span>
              <Toggle checked={allowDirect} onChange={() => setAllowDirect(!allowDirect)} />
            </div>
          </div>
          <div className="mb-4">
            <div className="font-medium mb-2">Data Sharing Consent</div>
            <div className="flex items-center justify-between mb-2">
              <span>Share basic referral stats with employers <span className="text-xs text-gray-400 ml-1">Required for bonus tracking</span></span>
              <Toggle checked={shareStats} onChange={() => setShareStats(!shareStats)} />
            </div>
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="font-medium mb-2 text-red-600">Delete Account</div>
            <div className="text-sm text-gray-500 mb-3">Once you delete your account, there is no going back. Please be certain.</div>
            <button className="bg-red-100 text-red-600 px-4 py-2 rounded-md font-medium border border-red-200">Delete Account</button>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 font-medium">Cancel</button>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium">Save Changes</button>
        </div>
      </div>
    </EmployeeLayout>
  );
} 