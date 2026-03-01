import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [settings, setSettings] = useState<any>({});

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <footer className="bg-blue-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-yellow-500 mr-2">St. Xavier's</span> School
            </h3>
            <p className="mb-6 max-w-md leading-relaxed">
              {settings.about_text || "Empowering students to achieve their full potential through academic excellence and character development."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-blue-900 p-2 rounded-full"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-blue-900 p-2 rounded-full"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-blue-900 p-2 rounded-full"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-blue-900 p-2 rounded-full"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">›</span> About Us</Link></li>
              <li><Link to="/admissions" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">›</span> Admissions</Link></li>
              <li><Link to="/academic" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">›</span> Academic Life</Link></li>
              <li><Link to="/news" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">›</span> News & Events</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-yellow-500 flex-shrink-0 mt-1" size={20} />
                <span>{settings.address || "123 Education Lane, Cityville, State 12345"}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-yellow-500 flex-shrink-0" size={20} />
                <span>{settings.contact_phone || "+1 234 567 8900"}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-yellow-500 flex-shrink-0" size={20} />
                <span>{settings.contact_email || "info@stxaviers.edu"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} St. Xavier's School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
