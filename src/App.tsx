import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Atom, 
  Code, 
  Cog, 
  Calculator,
  Users,
  Star,
  ArrowRight,
  Play,
  Globe,
  Lightbulb,
  Award,
  Mail,
  Gift
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'subjects', 'courses', 'community', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">STEM Explorer</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'Why Free?' },
                { id: 'subjects', label: 'Project Types' },
                { id: 'courses', label: 'Featured Projects' },
                { id: 'community', label: 'Community' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center space-x-1">
                <Gift className="h-4 w-4" />
                <span>Start Free</span>
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'Why Free?' },
                { id: 'subjects', label: 'Project Types' },
                { id: 'courses', label: 'Featured Projects' },
                { id: 'community', label: 'Community' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Explore the
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Future </span>
                of Learning
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Discover the exciting world of Science, Technology, Engineering, and Mathematics through interactive learning experiences designed for curious minds of all ages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Start Learning</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 transform rotate-3">
                <img 
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Students learning STEM"
                  className="rounded-xl transform -rotate-3 shadow-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-full animate-bounce">
                <Lightbulb className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why STEM Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              STEM education builds critical thinking, problem-solving skills, and creativity that shape the innovators and leaders of tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                STEM drives innovation that solves global challenges from climate change to space exploration, creating a better future for humanity.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Work together on exciting projects, share discoveries, and learn from peers in our vibrant STEM community.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Build skills for high-demand careers in technology, engineering, research, and innovation across all industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEM Subjects Section */}
      <section id="subjects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore STEM Fields</h2>
            <p className="text-xl text-gray-600">
              Dive deep into the four pillars of STEM education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Atom className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Science</h3>
              <p className="text-gray-600 mb-6">
                Explore the natural world through biology, chemistry, physics, and earth sciences with hands-on experiments.
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology</h3>
              <p className="text-gray-600 mb-6">
                Master coding, robotics, AI, and digital innovation through interactive programming challenges and projects.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cog className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engineering</h3>
              <p className="text-gray-600 mb-6">
                Design and build solutions to real-world problems through mechanical, electrical, and software engineering.
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700 flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mathematics</h3>
              <p className="text-gray-600 mb-6">
                Build strong foundations in algebra, geometry, calculus, and statistics with visual learning tools.
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600">
              Start your STEM journey with our carefully crafted learning paths
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <img 
                src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Robotics Course"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Technology</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Introduction to Robotics</h3>
                <p className="text-gray-600 mb-4">
                  Build and program your first robot while learning the fundamentals of mechanical design and programming.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$99</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Chemistry Lab"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Science</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chemistry Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Discover the building blocks of matter through safe, engaging virtual and hands-on experiments.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$79</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <img 
                src="https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Math Course"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Mathematics</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.7</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Calculus</h3>
                <p className="text-gray-600 mb-4">
                  Master the mathematical foundations that power engineering, physics, and modern technology.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$89</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join Our STEM Community</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with like-minded learners, share projects, and collaborate on exciting STEM challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Join the Community
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Ready to start your STEM journey? We're here to help you every step of the way.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Course Information</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Atom className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">STEM Explorer</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making STEM education free and fun for every child. Building tomorrow's innovators, one project at a time!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Projects</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Science Experiments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Energy & Motion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Build & Create</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Space & Flight</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Share Your Builds</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Get Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parent Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 STEM Kids Lab. All rights reserved. Built with ❤️ for curious young minds everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;