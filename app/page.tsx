import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UserTypes from './components/UserTypes';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <UserTypes />
      </main>
      <Footer />
    </div>
  );
}
