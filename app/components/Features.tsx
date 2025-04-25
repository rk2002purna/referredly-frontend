import { UserIcon, UsersIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: '1. Complete Your Profile',
    description: 'Create a detailed profile showcasing your skills, experience, and target companies. Help referrers understand your qualifications.',
    icon: UserIcon,
  },
  {
    title: '2. Match with Referrers',
    description: 'Browse and connect with employees at your target companies who are willing to refer verified candidates.',
    icon: UsersIcon,
  },
  {
    title: '3. Secure Your Dream Job',
    description: 'Get referred by an insider and increase your chances of landing an interview and offer at top companies.',
    icon: BriefcaseIcon,
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 