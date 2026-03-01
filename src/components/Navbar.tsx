import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <GraduationCap className="h-10 w-10 text-yellow-400" />
              <span className="font-bold text-2xl tracking-tight">St. Xavier's</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow-400 transition-colors font-medium">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition-colors font-medium">About Us</Link>
            <Link to="/admissions" className="hover:text-yellow-400 transition-colors font-medium">Admissions</Link>
            <Link to="/news" className="hover:text-yellow-400 transition-colors font-medium">News & Events</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition-colors font-medium">Contact</Link>
            <Link to="/login" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-bold transition-colors">
              Portal Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 pb-4 px-4">
          <div className="flex flex-col space-y-3 pt-2">
            <Link to="/" className="hover:text-yellow-400 block py-2">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 block py-2">About Us</Link>
            <Link to="/admissions" className="hover:text-yellow-400 block py-2">Admissions</Link>
            <Link to="/news" className="hover:text-yellow-400 block py-2">News & Events</Link>
            <Link to="/contact" className="hover:text-yellow-400 block py-2">Contact</Link>
            <Link to="/login" className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-md font-bold inline-block text-center mt-2">
              Portal Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
