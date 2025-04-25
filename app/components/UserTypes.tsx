import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-2 text-gray-700">
    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
    <span>{text}</span>
  </div>
);

const UserTypes = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Candidates */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-w-16 aspect-h-9 mb-6 relative rounded-lg overflow-hidden">
              <Image
                src="/candidates.jpg"
                alt="Group of candidates"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">For Candidates</h2>
            <p className="text-gray-600 mb-6">
              Create your professional profile and connect directly with employees who can refer you to
              their companies.
            </p>
            <div className="space-y-3 mb-8">
              <CheckItem text="Increase interview chances by 6x" />
              <CheckItem text="Access exclusive job opportunities" />
              <CheckItem text="Skip the resume black hole" />
            </div>
            <Link
              href="/signup"
              className="block text-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              Sign Up as Job Seeker
            </Link>
          </div>

          {/* For Referrers */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-w-16 aspect-h-9 mb-6 relative rounded-lg overflow-hidden">
              <Image
                src="/referrers.jpg"
                alt="Professional referrer"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">For Referrers</h2>
            <p className="text-gray-600 mb-6">
              Earn referral bonuses by connecting pre-verified candidates to open positions at your
              company.
            </p>
            <div className="space-y-3 mb-8">
              <CheckItem text="Earn $1,500+ per successful hire" />
              <CheckItem text="Only review pre-qualified candidates" />
              <CheckItem text="Build your professional network" />
            </div>
            <Link
              href="/signup"
              className="block text-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors w-full"
            >
              Sign Up as Employee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypes; 