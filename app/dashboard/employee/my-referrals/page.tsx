import EmployeeLayout from "../EmployeeLayout";
import React from "react";

const stats = [
  { label: "Total Referrals", value: 12, icon: "user-plus" },
  { label: "Total Hires", value: 5, icon: "user-check" },
  { label: "Total Bonus Earned", value: "$5,000", icon: "dollar" },
];

const referrals = [
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    position: "Senior Frontend Developer",
    referred: "April 12, 2025",
    status: "Interviewing",
    statusColor: "bg-green-100 text-green-800",
    progress: { label: "Stage 2: Technical Interview", color: "bg-blue-600", width: "w-1/2" },
    bonus: "Potential bonus: $1,000 upon hire",
    feedback: null,
  },
  {
    name: "Michael Chen",
    email: "michael.chen@example.com",
    position: "Product Manager",
    referred: "March 28, 2025",
    status: "Hired",
    statusColor: "bg-green-100 text-green-800",
    progress: { label: "Completed: Hired on April 20, 2025", color: "bg-green-600", width: "w-full" },
    bonus: "Bonus earned: $1,500",
    feedback: null,
  },
  {
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    position: "UX Designer",
    referred: "April 5, 2025",
    status: "Rejected",
    statusColor: "bg-red-100 text-red-700",
    progress: { label: "Not selected after design challenge", color: "bg-red-600", width: "w-1/2" },
    bonus: null,
    feedback: "Feedback: Strong portfolio but not enough enterprise experience",
  },
  {
    name: "David Rodriguez",
    email: "david.rodriguez@example.com",
    position: "Backend Engineer",
    referred: "February 15, 2025",
    status: "Hired",
    statusColor: "bg-green-100 text-green-800",
    progress: { label: "Completed: Hired on March 10, 2025", color: "bg-green-600", width: "w-full" },
    bonus: "Bonus earned: $2,000",
    feedback: null,
  },
];

export default function MyReferralsPage() {
  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">My Referrals</h1>
          <div className="text-gray-500 mb-6">Track your referrals and earned bonuses</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
              <div className="bg-blue-50 text-blue-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 9a3 3 0 11-6 0 3 3 0 016 0zM6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Referrals</div>
                <div className="text-xl font-bold">12</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
              <div className="bg-green-50 text-green-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Hires</div>
                <div className="text-xl font-bold">5</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
              <div className="bg-yellow-50 text-yellow-600 rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Bonus Earned</div>
                <div className="text-xl font-bold">$5,000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full md:w-auto">
              <option>All Referrals</option>
              <option>Hired</option>
              <option>Interviewing</option>
              <option>Rejected</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full md:w-auto">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {referrals.map((ref, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <div className="font-semibold text-gray-900">{ref.name}</div>
                  <div className="text-xs text-gray-500">{ref.email}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${ref.status === "Interviewing" ? "bg-green-100 text-green-800" : ref.status === "Hired" ? "bg-green-100 text-green-800" : ref.status === "Rejected" ? "bg-red-100 text-red-700" : ""}`}>{ref.status}</span>
              </div>
              <div className="text-sm text-gray-700 mb-1">{ref.position}</div>
              <div className="text-xs text-gray-500 mb-2">Referred on {ref.referred}</div>
              <div className="mb-2">
                <div className="text-xs font-medium mb-1" style={{ color: ref.progress.color.includes('red') ? '#dc2626' : ref.progress.color.includes('green') ? '#16a34a' : '#2563eb' }}>{ref.progress.label}</div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`${ref.progress.color} ${ref.progress.width} h-2 rounded-full`}></div>
                </div>
              </div>
              {ref.bonus && <div className="text-xs text-gray-700 mt-1 font-medium">{ref.bonus}</div>}
              {ref.feedback && <div className="text-xs text-red-600 mt-1 font-medium">{ref.feedback}</div>}
            </div>
          ))}
        </div>
      </div>
    </EmployeeLayout>
  );
} 