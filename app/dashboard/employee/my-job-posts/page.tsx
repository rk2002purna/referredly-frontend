"use client";
import React, { useState } from "react";
import Link from "next/link";
import EmployeeLayout from "../EmployeeLayout";

type JobStatus = "Active" | "Closed" | "Draft";

const statusColors: Record<JobStatus, string> = {
  Active: "bg-green-100 text-green-800",
  Closed: "bg-gray-200 text-gray-600",
  Draft: "bg-yellow-100 text-yellow-800",
};

const jobPosts = [
  {
    title: "Senior Software Engineer",
    status: "Active" as JobStatus,
    salary: "$120K - $150K",
    referrals: 12,
    posted: "Apr 18, 2025",
  },
  {
    title: "Product Manager",
    status: "Active" as JobStatus,
    salary: "$130K - $160K",
    referrals: 8,
    posted: "Apr 15, 2025",
  },
  {
    title: "Data Scientist",
    status: "Active" as JobStatus,
    salary: "$110K - $140K",
    referrals: 5,
    posted: "Apr 12, 2025",
  },
  {
    title: "Frontend Developer",
    status: "Closed" as JobStatus,
    salary: "$90K - $120K",
    referrals: 15,
    posted: "Mar 28, 2025",
  },
  {
    title: "UX/UI Designer",
    status: "Draft" as JobStatus,
    salary: "$95K - $125K",
    referrals: 0,
    posted: "Apr 22, 2025",
  },
  {
    title: "DevOps Engineer",
    status: "Active" as JobStatus,
    salary: "$125K - $160K",
    referrals: 7,
    posted: "Apr 10, 2025",
  },
];

export default function MyJobPostsPage() {
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("Newest");

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Job Posts</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-white text-sm whitespace-nowrap">
                <span>Status: {status}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center border border-gray-300 rounded-md px-4 py-2 bg-white text-sm whitespace-nowrap">
                <span>Sort: {sort}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              <span>Post New Job</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobPosts.map((job, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[job.status as JobStatus]}`}>{job.status}</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" /></svg>
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v2m8 4a4 4 0 01-8 0" /></svg>
                  <span>{job.referrals} Referral Requests</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>Posted on {job.posted}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 border border-blue-600 text-blue-600 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">View Applicants</button>
                <button className="border border-gray-300 px-3 py-2 rounded-md text-sm whitespace-nowrap">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M3 17v4h4l10.293-10.293a1 1 0 000-1.414l-3.586-3.586a1 1 0 00-1.414 0L3 17z" /></svg>
                </button>
                <button className="border border-gray-300 px-3 py-2 rounded-md text-sm whitespace-nowrap">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-gray-600">Showing 1-6 of 12 job posts</div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600">&lt;</button>
            <button className="px-3 py-1 border border-blue-600 bg-blue-50 text-blue-600 rounded-md text-sm font-medium">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600">&gt;</button>
          </div>
        </div>
      </div>
    </EmployeeLayout>
  );
} 