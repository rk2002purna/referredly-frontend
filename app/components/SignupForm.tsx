"use client";

import { FC, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface SignupFormProps {
  userType: 'jobSeeker' | 'employee';
  currentStep: number;
  onUserTypeChange: (type: 'jobSeeker' | 'employee') => void;
  onStepChange: (step: number) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  linkedinUrl: string;
  skills: string;
  preferredRoles: string;
  location: string;
  referralRequest: string;
  companyName: string;
  jobTitle: string;
  companyWebsite: string;
  yearsAtCompany: string;
  employeeId: string;
}

const SignupForm: FC<SignupFormProps> = ({
  userType,
  currentStep,
  onUserTypeChange,
  onStepChange,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    linkedinUrl: '',
    skills: '',
    preferredRoles: '',
    location: '',
    referralRequest: '',
    companyName: '',
    jobTitle: '',
    companyWebsite: '',
    yearsAtCompany: '',
    employeeId: '',
  });
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      // Here you would typically validate the current step
      if (currentStep === 1) {
        // Simulate email check - in real app, this would be an API call
        if (formData.email === 'test@example.com') {
          setEmailError('Already account exists with this email.');
          return;
        }
      }
      onStepChange(currentStep + 1);
    }
  };

  return (
    <div>
      {/* User Type Toggle - Centered */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors
              ${userType === 'jobSeeker' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-gray-900'}`}
            onClick={() => {
              onUserTypeChange('jobSeeker');
              onStepChange(1);
            }}
          >
            Job Seeker
          </button>
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors
              ${userType === 'employee' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-gray-900'}`}
            onClick={() => {
              onUserTypeChange('employee');
              onStepChange(1);
            }}
          >
            Employee
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Job Seeker Forms */}
        {userType === 'jobSeeker' && (
          <>
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600">{emailError}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </form>
            )}

            {/* Step 2: Professional Info */}
            {currentStep === 2 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    placeholder="Enter your LinkedIn profile URL"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills/Technologies</label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="Add your skills (e.g., Python, Java, ML)"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-sm text-gray-500">Separate skills with commas</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Resume Upload</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="preferredRoles" className="block text-sm font-medium text-gray-700">Preferred Job Roles</label>
                  <select
                    id="preferredRoles"
                    name="preferredRoles"
                    value={formData.preferredRoles}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a role</option>
                    <option value="software-developer">Software Developer</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="ux-designer">UX Designer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Preferred Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter your preferred location or 'Remote'"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="referralRequest" className="block text-sm font-medium text-gray-700">Referral Request</label>
                  <textarea
                    id="referralRequest"
                    name="referralRequest"
                    value={formData.referralRequest}
                    onChange={handleInputChange}
                    placeholder="What kind of companies are you looking for referrals in?"
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </form>
            )}
          </>
        )}

        {/* Employee Forms */}
        {userType === 'employee' && (
          <>
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Company Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your company email"
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600">{emailError}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </form>
            )}

            {/* Step 2: Company Info */}
            {currentStep === 2 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title/Position</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Enter your job title"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700">Company Website or LinkedIn Profile</label>
                  <input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleInputChange}
                    placeholder="Enter company website or LinkedIn profile URL"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </form>
            )}

            {/* Step 3: Additional Info */}
            {currentStep === 3 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="yearsAtCompany" className="block text-sm font-medium text-gray-700">Years at Company</label>
                  <input
                    type="number"
                    id="yearsAtCompany"
                    name="yearsAtCompany"
                    value={formData.yearsAtCompany}
                    onChange={handleInputChange}
                    placeholder="Enter number of years"
                    min="0"
                    step="0.5"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
                    Employee ID <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleInputChange}
                    placeholder="Enter your employee ID"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </form>
            )}
          </>
        )}

        <div className="mt-6 flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => onStepChange(currentStep - 1)}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Back
            </button>
          )}
          <div className={currentStep === 1 ? 'ml-auto' : ''}>
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {currentStep === 3 ? (userType === 'jobSeeker' ? 'Sign Up and Find Referrals' : 'Sign Up and Start Referring') : 'Next'}
            </button>
          </div>
        </div>

        {/* Testimonials - Only show on first step */}
        {currentStep === 1 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Success Stories</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 italic">
                "Thanks to Referredly, I got a referral to my dream company and landed the job within weeks! The process was smooth and professional."
              </p>
              <p className="text-sm text-gray-700 mt-2">- Sarah K., Software Engineer</p>
            </div>
          </div>
        )}

        {/* Security Statement - Show on all steps */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Your data is protected by industry-standard encryption. We never share your personal information without your consent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm; 