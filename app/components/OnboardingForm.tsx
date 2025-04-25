'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  // Basic Info
  fullName: string;
  email: string;
  phone: string;
  currentJobTitle: string;
  location: string;
  // Experience
  yearsOfExperience: string;
  skills: string[];
  resume: File | null;
  linkedinUrl: string;
  // Preferences
  jobTypes: string[];
  workTypes: string[];
  locations: string[];
  salaryRange: {
    min: string;
    max: string;
  };
}

const OnboardingForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(2); // 0: Basic Info, 1: Experience, 2: Preferences
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    currentJobTitle: '',
    location: '',
    yearsOfExperience: '',
    skills: [],
    resume: null,
    linkedinUrl: '',
    jobTypes: [],
    workTypes: [],
    locations: [],
    salaryRange: {
      min: '',
      max: '',
    },
  });

  const steps = ['Basic Info', 'Experience', 'Preferences'];

  const skillOptions = [
    'JavaScript',
    'Python',
    'Java',
    'React',
    'Node.js',
    'SQL',
    'Machine Learning',
    'Data Analysis',
    'Product Management',
    'UX Design',
  ];

  const jobTypeOptions = [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    'UX Designer',
    'DevOps Engineer',
    'Full Stack Developer',
  ];

  const workTypeOptions = [
    'Remote',
    'Hybrid',
    'On-site',
  ];

  const locationOptions = [
    'Bangalore, Karnataka',
    'Hyderabad, Telangana',
    'Pune, Maharashtra',
    'Mumbai, Maharashtra',
    'Chennai, Tamil Nadu',
    'Gurgaon, Haryana',
    'Noida, Uttar Pradesh',
    'Delhi NCR',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'minSalary' || name === 'maxSalary') {
      setFormData((prev) => ({
        ...prev,
        salaryRange: {
          ...prev.salaryRange,
          [name === 'minSalary' ? 'min' : 'max']: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSkillChange = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleOptionToggle = (option: string, category: 'jobTypes' | 'workTypes' | 'locations') => {
    setFormData((prev) => ({
      ...prev,
      [category]: prev[category].includes(option)
        ? prev[category].filter((item) => item !== option)
        : [...prev[category], option],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final submission
      console.log('Form submitted:', formData);
      router.push('/dashboard');
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderExperienceForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-1">
          Years of Experience
        </label>
        <select
          id="yearsOfExperience"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select experience</option>
          <option value="0-1">0-1 years</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
        <div className="grid grid-cols-2 gap-4">
          {skillOptions.map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={() => handleSkillChange(skill)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="resume"
                className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
              >
                <span>Upload a file</span>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
            {formData.resume && (
              <p className="text-sm text-gray-600">Selected: {formData.resume.name}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn URL
        </label>
        <input
          type="url"
          id="linkedinUrl"
          name="linkedinUrl"
          value={formData.linkedinUrl}
          onChange={handleInputChange}
          placeholder="Enter your LinkedIn profile URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Next
        </button>
      </div>
    </form>
  );

  const renderBasicInfoForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="currentJobTitle" className="block text-sm font-medium text-gray-700 mb-1">
          Current Job Title
        </label>
        <input
          type="text"
          id="currentJobTitle"
          name="currentJobTitle"
          value={formData.currentJobTitle}
          onChange={handleInputChange}
          placeholder="Enter your current job title"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Enter your location"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Next
        </button>
      </div>
    </form>
  );

  const renderPreferencesForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Job Types
        </label>
        <div className="grid grid-cols-2 gap-4">
          {jobTypeOptions.map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.jobTypes.includes(type)}
                onChange={() => handleOptionToggle(type, 'jobTypes')}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Work Type
        </label>
        <div className="flex space-x-4">
          {workTypeOptions.map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.workTypes.includes(type)}
                onChange={() => handleOptionToggle(type, 'workTypes')}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Locations
        </label>
        <div className="grid grid-cols-2 gap-4">
          {locationOptions.map((location) => (
            <label key={location} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.locations.includes(location)}
                onChange={() => handleOptionToggle(location, 'locations')}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">{location}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Expected Salary Range (in Lakhs per annum)
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              name="minSalary"
              value={formData.salaryRange.min}
              onChange={handleInputChange}
              placeholder="Min (e.g., 12)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">LPA</span>
          </div>
          <div className="relative">
            <input
              type="text"
              name="maxSalary"
              value={formData.salaryRange.max}
              onChange={handleInputChange}
              placeholder="Max (e.g., 30)"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">LPA</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-gray-500">LPA = Lakhs Per Annum</p>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Complete Profile
        </button>
      </div>
    </form>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Profile</h1>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`text-sm ${
                  index === currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Steps */}
        {currentStep === 0 && renderBasicInfoForm()}
        {currentStep === 1 && renderExperienceForm()}
        {currentStep === 2 && renderPreferencesForm()}
      </div>
    </div>
  );
};

export default OnboardingForm; 