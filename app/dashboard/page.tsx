import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import JobList from '../components/JobList';
import ProfileCompletion from '../components/ProfileCompletion';
import SearchBar from '../components/SearchBar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">Welcome, John</h1>
              <p className="text-sm text-gray-600">Software Engineer</p>
            </div>
            
            <ProfileCompletion />
            
            <div className="mt-8">
              <SearchBar />
            </div>
            
            <JobList />
          </div>
        </main>
      </div>
    </div>
  );
} 