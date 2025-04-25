'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import OTPVerification from '@/app/components/OTPVerification';

const EmployeeSignup: FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.endsWith('.com')) {
      setError('Please enter a valid company email');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Here you would typically make an API call to register the user
      // For now, we'll just move to the OTP step
      setStep(2);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleVerificationComplete = () => {
    // Here you would typically update the user's verification status
    router.push('/dashboard/employee');
  };

  const handleResendOTP = () => {
    // Here you would typically make an API call to resend the OTP
    console.log('Resending OTP...');
  };

  if (step === 2) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-center mb-2">Sign up as an Employee</h1>
        <p className="text-center text-gray-600 mb-8">Help candidates get their dream jobs through referrals!</p>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <span className="text-sm mt-1">Basic Info</span>
          </div>
          <div className="flex-1 h-[2px] bg-green-500 mx-4"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">2</div>
            <span className="text-sm mt-1">Verification</span>
          </div>
        </div>

        <OTPVerification
          email={formData.email}
          onVerificationComplete={handleVerificationComplete}
          onResendOTP={handleResendOTP}
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-2">Sign up as an Employee</h1>
      <p className="text-center text-gray-600 mb-8">Help candidates get their dream jobs through referrals!</p>

      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">1</div>
          <span className="text-sm mt-1">Basic Info</span>
        </div>
        <div className="flex-1 h-[2px] bg-gray-200 mx-4"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">2</div>
          <span className="text-sm mt-1">Verification</span>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-2 mb-8">
        <Link href="/signup">
          <button className="px-6 py-2 rounded-md">Job Seeker</button>
        </Link>
        <Link href="/signup/employee">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md">Employee</button>
        </Link>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Company Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your company email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Continue
        </button>
      </form>

      <p className="text-center mt-6">
        Already have an account?{' '}
        <Link href="/signin" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default EmployeeSignup; 