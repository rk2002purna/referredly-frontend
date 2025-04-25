import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Referredly
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">
              Dashboard
            </Link>
            <Link 
              href="/onboarding" 
              className="text-blue-600 font-medium border-b-2 border-blue-600"
            >
              Onboarding
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-blue-600 hover:text-blue-700">
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 