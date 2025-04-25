"use client";

import { FC, useState } from 'react';
import ProfileCompletionTracker from '../components/ProfileCompletionTracker';
import SignupForm from '../components/SignupForm';

const SignupPage: FC = () => {
  const [userType, setUserType] = useState<'jobSeeker' | 'employee'>('jobSeeker');
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-2">
          {userType === 'jobSeeker' ? 'Sign up as a Job Seeker' : 'Sign up as an Employee'}
        </h1>
        <p className="text-gray-600 text-center mb-8">
          {userType === 'jobSeeker' 
            ? 'Find your dream job with a referral!' 
            : 'Help job seekers and earn referral bonuses!'}
        </p>
        <ProfileCompletionTracker userType={userType} currentStep={currentStep} />
        <SignupForm
          userType={userType}
          currentStep={currentStep}
          onUserTypeChange={setUserType}
          onStepChange={setCurrentStep}
        />
      </div>
    </div>
  );
};

export default SignupPage; 