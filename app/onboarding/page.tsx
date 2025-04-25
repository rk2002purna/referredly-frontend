import OnboardingForm from '../components/OnboardingForm';
import Navbar from '../components/Navbar';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <OnboardingForm />
      </div>
    </div>
  );
} 