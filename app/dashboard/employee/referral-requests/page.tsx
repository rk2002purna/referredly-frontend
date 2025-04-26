import EmployeeLayout from "../EmployeeLayout";
import React from "react";

const referralRequests = [
  {
    name: "Rachel Adams",
    email: "rachel.adams@gmail.com",
    position: "Senior Software Engineer",
    experience: "6 years",
    date: "Apr 23, 2025",
    status: "Pending",
    color: "bg-blue-100 text-blue-700",
    badge: "bg-yellow-100 text-yellow-800",
    action: "Review Profile",
  },
  {
    name: "Jason Martinez",
    email: "jason.martinez@outlook.com",
    position: "Product Manager",
    experience: "8 years",
    date: "Apr 22, 2025",
    status: "Pending",
    color: "bg-green-100 text-green-700",
    badge: "bg-yellow-100 text-yellow-800",
    action: "Review Profile",
  },
  {
    name: "Sophia Chen",
    email: "sophia.chen@gmail.com",
    position: "Data Scientist",
    experience: "4 years",
    date: "Apr 21, 2025",
    status: "Pending",
    color: "bg-yellow-100 text-yellow-700",
    badge: "bg-yellow-100 text-yellow-800",
    action: "Review Profile",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@gmail.com",
    position: "UX Designer",
    experience: "5 years",
    date: "Apr 20, 2025",
    status: "Accepted",
    color: "bg-purple-100 text-purple-700",
    badge: "bg-green-100 text-green-800",
    action: "View Status",
  },
  {
    name: "David Wilson",
    email: "david.wilson@outlook.com",
    position: "DevOps Engineer",
    experience: "7 years",
    date: "Apr 19, 2025",
    status: "Declined",
    color: "bg-red-100 text-red-700",
    badge: "bg-red-100 text-red-700",
    action: "Review Profile",
  },
  {
    name: "Aisha Patel",
    email: "aisha.patel@gmail.com",
    position: "Frontend Developer",
    experience: "3 years",
    date: "Apr 18, 2025",
    status: "Pending",
    color: "bg-gray-100 text-gray-700",
    badge: "bg-yellow-100 text-yellow-800",
    action: "Review Profile",
  },
];

const statusLabel = {
  Pending: "Pending",
  Accepted: "Accepted",
  Declined: "Declined",
};

const statusBadge = {
  Pending: "bg-yellow-100 text-yellow-800",
  Accepted: "bg-green-100 text-green-800",
  Declined: "bg-red-100 text-red-700",
};

export default function ReferralRequestsPage() {
  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-6">
          <div className="text-xl font-semibold mb-2">Welcome, Michael</div>
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-3 rounded-lg shadow-sm">
            Your employee account has been verified. You can now post jobs and refer candidates.
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <h2 className="text-lg font-semibold text-gray-900">Referral Requests</h2>
            <div className="flex flex-wrap gap-2 items-center">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                <option>All Statuses</option>
                <option>Pending</option>
                <option>Accepted</option>
                <option>Declined</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
                <option>Sort by: Newest</option>
                <option>Sort by: Oldest</option>
              </select>
              <input
                type="text"
                placeholder="Search candidates"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {referralRequests.map((req, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 whitespace-nowrap flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base ${req.color}`}>{req.name[0]}</span>
                      <div>
                        <div className="font-medium text-gray-900 leading-tight">{req.name}</div>
                        <div className="text-xs text-gray-500 leading-tight">{req.email}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">{req.position}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">{req.experience}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-700">{req.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge[req.status as keyof typeof statusBadge]}`}>{statusLabel[req.status as keyof typeof statusLabel]}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap flex gap-2">
                      <button className={`px-4 py-1 rounded-md text-sm font-medium border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 transition ${req.action === "View Status" ? "border-none bg-blue-50 text-blue-700" : ""}`}>{req.action}</button>
                      {req.status === "Pending" && (
                        <button className="px-4 py-1 rounded-md text-sm font-medium border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition">Decline</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-600">Showing 1 to 6 of 24 results</div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600">Previous</button>
              <button className="px-3 py-1 border border-blue-600 bg-blue-50 text-blue-600 rounded-md text-sm font-medium">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600">4</button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600">Next</button>
            </div>
          </div>
        </div>
      </div>
    </EmployeeLayout>
  );
} 