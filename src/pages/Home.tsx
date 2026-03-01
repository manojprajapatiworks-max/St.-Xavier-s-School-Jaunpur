import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, BookOpen, Users, Trophy, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const [settings, setSettings] = useState<any>({});
  const [news, setNews] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/settings').then(res => res.json()).then(data => setSettings(data));
    fetch('/api/news').then(res => res.json()).then(data => setNews(data.slice(0, 3)));
    fetch('/api/events').then(res => res.json()).then(data => setEvents(data.slice(0, 4)));
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/school/1920/1080" 
            alt="School Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-950/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            {settings.hero_title || "Welcome to St. Xavier's School"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-3xl mx-auto"
          >
            {settings.hero_subtitle || "Empowering students to achieve their full potential."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/admissions" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
              Apply Now
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Discover More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Links / Stats */}
      <section className="bg-white py-16 relative z-20 -mt-10 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-blue-900">
              <BookOpen size={32} />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">100%</h3>
            <p className="text-gray-500">Pass Rate</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-blue-900">
              <Users size={32} />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">15:1</h3>
            <p className="text-gray-500">Student/Teacher Ratio</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-blue-900">
              <Trophy size={32} />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">50+</h3>
            <p className="text-gray-500">Extracurriculars</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-blue-900">
              <Globe size={32} />
            </div>
            <h3 className="font-bold text-2xl text-gray-900">30+</h3>
            <p className="text-gray-500">Nationalities</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">About St. Xavier's</h2>
              <h3 className="text-4xl font-bold text-blue-950 mb-6 leading-tight">A Tradition of Excellence in Education</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {settings.about_text || "St. Xavier's School is a premier educational institution dedicated to academic excellence and character development. We provide a nurturing environment where students are encouraged to explore, learn, and grow into responsible global citizens."}
              </p>
              <Link to="/about" className="inline-flex items-center text-blue-900 font-bold hover:text-yellow-600 transition-colors group">
                Read Our Full Story 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/students/800/600" 
                alt="Students" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-blue-950 p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">25+</p>
                <p className="font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest mb-2">Stay Updated</h2>
              <h3 className="text-4xl font-bold text-blue-950">Latest News & Events</h3>
            </div>
            <Link to="/news" className="mt-4 md:mt-0 inline-flex items-center text-blue-900 font-bold hover:text-yellow-600 transition-colors">
              View All News <ChevronRight className="ml-1" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* News Column */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.length > 0 ? news.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl mb-4">
                    <img 
                      src={item.image_url || `https://picsum.photos/seed/${item.id}/600/400`} 
                      alt={item.title} 
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-sm text-yellow-600 font-semibold mb-2">{new Date(item.date).toLocaleDateString()}</p>
                  <h4 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                  <p className="text-gray-600 line-clamp-3">{item.content}</p>
                </div>
              )) : (
                <p className="text-gray-500 italic">No news available at the moment.</p>
              )}
            </div>

            {/* Events Column */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-blue-950 mb-8 flex items-center">
                <Calendar className="mr-3 text-yellow-500" /> Upcoming Events
              </h4>
              <div className="space-y-6">
                {events.length > 0 ? events.map((event) => (
                  <div key={event.id} className="flex items-start border-b border-blue-100 pb-6 last:border-0 last:pb-0">
                    <div className="bg-white rounded-lg p-3 text-center min-w-[70px] shadow-sm mr-4">
                      <p className="text-sm font-bold text-yellow-600 uppercase">
                        {new Date(event.date).toLocaleString('default', { month: 'short' })}
                      </p>
                      <p className="text-2xl font-bold text-blue-950">
                        {new Date(event.date).getDate()}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg text-blue-950 mb-1">{event.title}</h5>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                )) : (
                  <p className="text-gray-500 italic">No upcoming events.</p>
                )}
              </div>
              <Link to="/events" className="mt-8 block w-full text-center bg-white border border-blue-200 text-blue-900 font-bold py-3 rounded-lg hover:bg-blue-900 hover:text-white transition-colors">
                View Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
