'use client';

import { useState } from 'react';
import ReferralModal from './ReferralModal';

const jobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Google',
    location: 'Bangalore, India',
    type: 'Hybrid',
    salary: '₹25-35 LPA',
    logo: '/company-logos/google.png',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Hyderabad, India',
    type: 'Remote',
    salary: '₹22-32 LPA',
    logo: '/company-logos/microsoft.png',
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'Meta',
    location: 'Mumbai, India',
    type: 'On-site',
    salary: '₹20-30 LPA',
    logo: '/company-logos/meta.png',
  },
];

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestReferral = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <div className="mt-6 space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  {job.company.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                  <span>{job.company}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-500" />
                  <span>{job.location}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-500" />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{job.salary}</div>
              </div>
              <button
                onClick={() => handleRequestReferral(job)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Ask for Referral
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedJob && (
        <ReferralModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          jobTitle={selectedJob.title}
          company={selectedJob.company}
        />
      )}
    </>
  );
};

export default JobList; 