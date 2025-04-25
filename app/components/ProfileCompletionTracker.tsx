import { FC } from 'react';

interface Step {
  id: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface ProfileCompletionTrackerProps {
  userType?: 'jobSeeker' | 'employee';
  currentStep?: number;
}

const ProfileCompletionTracker: FC<ProfileCompletionTrackerProps> = ({
  userType = 'jobSeeker',
  currentStep = 1
}) => {
  const jobSeekerSteps: Step[] = [
    { id: 1, title: 'Basic Info', isActive: currentStep === 1, isCompleted: currentStep > 1 },
    { id: 2, title: 'Experience', isActive: currentStep === 2, isCompleted: currentStep > 2 },
    { id: 3, title: 'Preferences', isActive: currentStep === 3, isCompleted: currentStep > 3 }
  ];

  const employeeSteps: Step[] = [
    { id: 1, title: 'Basic Info', isActive: currentStep === 1, isCompleted: currentStep > 1 },
    { id: 2, title: 'Verify Company', isActive: currentStep === 2, isCompleted: currentStep > 2 },
    { id: 3, title: 'Preferences', isActive: currentStep === 3, isCompleted: currentStep > 3 }
  ];

  const steps = userType === 'jobSeeker' ? jobSeekerSteps : employeeSteps;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${step.isCompleted ? 'bg-blue-600 text-white' : 
                    step.isActive ? 'bg-blue-600 text-white' : 
                    'bg-gray-200 text-gray-600'}`}
              >
                {step.isCompleted ? '✓' : step.id}
              </div>
              <div className="mt-2 text-xs text-center text-gray-600">{step.title}</div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-24 h-0.5 mx-2 
                  ${step.isCompleted ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCompletionTracker; 