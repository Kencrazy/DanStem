//Fly me to the moon 3h sáng vẫn phải ngồi code, In other words, hold my hand when I grumble
//Let me sleep among the stars, In other words, please don't call me
// In other words, I love my bed more than your calls, know your limit
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
  Gift,
  Upload,
  Heart,
  Camera,
  Rocket,
  Zap,
  BookOpen,
  CheckCircle,
  Target,
  Wrench
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'subjects', 'courses', 'gallery', 'community', 'contact'];
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

  // Give me sample courses data with id, title, category, image, description, difficulty, duration, requirements (array), steps (array), and solution, make it fun and engaging for kids
  const courses = [
    {
      id: 1,
      title: "Build Your First Robot Friend! 🤖",
      category: "Technology",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Create an awesome robot buddy that can move, dance, and even talk to you!",
      difficulty: "Beginner",
      duration: "2 weeks",
      requirements: [
        "Arduino Uno kit (we'll help you get one!)",
        "Basic craft supplies (cardboard, tape, markers)",
        "A computer or tablet",
        "Lots of curiosity and excitement! 🎉"
      ],
      steps: [
        "Unbox your Arduino and learn what each part does",
        "Build the robot's body using cardboard and creativity",
        "Connect motors and sensors step-by-step",
        "Write your first code to make it move",
        "Add LED eyes that blink and change colors",
        "Program fun movements and sounds",
        "Decorate and name your robot friend!",
        "Show off your creation to family and friends"
      ],
      solution: "By the end, you'll have a working robot that responds to your commands and can even play simple games with you!"
    },
    {
      id: 2,
      title: "Amazing Chemistry Kitchen Lab! ⚗️",
      category: "Science",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Discover the magic of chemistry using safe ingredients from your kitchen!",
      difficulty: "Beginner",
      duration: "1 week",
      requirements: [
        "Kitchen ingredients (baking soda, vinegar, food coloring)",
        "Clear containers and measuring cups",
        "Safety goggles (or regular glasses)",
        "Adult supervision for some experiments",
        "A notebook to record your discoveries! 📝"
      ],
      steps: [
        "Set up your safe kitchen laboratory",
        "Learn about acids and bases with colorful reactions",
        "Create fizzing volcanoes and color-changing potions",
        "Make slime that glows in the dark",
        "Grow crystals that look like precious gems",
        "Understand why reactions happen",
        "Document your experiments like a real scientist",
        "Share your coolest discoveries!"
      ],
      solution: "You'll understand basic chemistry principles and have a collection of amazing experiments to show your friends and family!"
    },
    {
      id: 3,
      title: "Math Magic & Number Adventures! ✨",
      category: "Mathematics",
      image: "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Turn math into an exciting adventure with puzzles, games, and real-world challenges!",
      difficulty: "Intermediate",
      duration: "3 weeks",
      requirements: [
        "Calculator or math app",
        "Graph paper and colored pencils",
        "Measuring tools (ruler, measuring tape)",
        "Everyday objects for counting and measuring",
        "A growth mindset and love for puzzles! 🧩"
      ],
      steps: [
        "Discover math patterns in nature and art",
        "Solve treasure hunt problems using coordinates",
        "Build geometric shapes with everyday materials",
        "Calculate the best deals while shopping",
        "Create beautiful mathematical art",
        "Learn probability through fun games",
        "Design your dream room using measurements",
        "Become a math detective solving number mysteries"
      ],
      solution: "Math will become your superpower for solving real-world problems and creating amazing things!"
    }
  ];

  // Give me sample gallery items with id, title, image, likes, and description, make it fun and engaging for kids
  const galleryItems = [
    {
      id: 1,
      title: "Rainbow Robot by Emma, age 10",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 47,
      description: "My robot can dance to music and changes colors!"
    },
    {
      id: 2,
      title: "Volcano Explosion by Jake, age 8",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 32,
      description: "Made the biggest volcano eruption ever! 🌋"
    },
    {
      id: 3,
      title: "Crystal Garden by Sofia, age 12",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 28,
      description: "Grew these beautiful crystals in my kitchen lab!"
    },
    {
      id: 4,
      title: "Math Art Masterpiece by Alex, age 9",
      image: "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 41,
      description: "Used geometry to create this awesome pattern!"
    },
    {
      id: 5,
      title: "Flying Paper Plane by Mia, age 7",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 35,
      description: "This plane can fly for 15 seconds straight! ✈️"
    },
    {
      id: 6,
      title: "LED Light Show by David, age 11",
      image: "https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 52,
      description: "Programmed 20 LEDs to create a music light show!"
    }
  ];

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button 
            onClick={() => setSelectedCourse(null)}
            className="mb-6 flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
            <span>Back to Courses</span>
          </button>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-64">
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{selectedCourse.title}</h1>
                <div className="flex items-center space-x-4">
                  <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-medium">
                    100% FREE! 🎉
                  </span>
                  <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedCourse.difficulty}
                  </span>
                  <span className="bg-purple-500 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedCourse.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {selectedCourse.description}
              </p>

              {/* Requirements Section */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">What You'll Need</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCourse.requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl">
                      <Target className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Section */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Step-by-Step Adventure</h2>
                </div>
                <div className="space-y-4">
                  {selectedCourse.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Section */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Rocket className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your Amazing Achievement</h2>
                </div>
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                  <p className="text-lg text-gray-700 leading-relaxed">{selectedCourse.solution}</p>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg">
                  🚀 Start This Free Adventure!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <span className="text-xl font-bold text-gray-900">STEM Kids Lab</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'Why Free?' },
                { id: 'subjects', label: 'Project Types' },
                { id: 'courses', label: 'Free Projects' },
                { id: 'gallery', label: 'Kids Gallery' },
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
                { id: 'courses', label: 'Free Projects' },
                { id: 'gallery', label: 'Kids Gallery' },
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
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium mb-6">
                <Gift className="h-5 w-5" />
                <span>100% FREE Forever! 🎉</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Amazing
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> STEM </span>
                Adventures for Kids!
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Build robots, create explosions, solve mysteries, and become a young scientist! All projects are completely FREE and designed to make learning super fun! 🚀
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Start Building Now!</span>
                  <Rocket className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
                >
                  <Camera className="h-5 w-5" />
                  <span>See Kids' Creations</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 transform rotate-3">
                <img 
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Kids learning STEM"
                  className="rounded-xl transform -rotate-3 shadow-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-full animate-bounce">
                <Lightbulb className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full animate-pulse">
                <Zap className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Everything is FREE? 🎁</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Because every child deserves to explore, create, and discover the amazing world of science and technology - no matter what! 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Made with Love ❤️</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe every kid should have the chance to build amazing things and discover their superpowers in STEM!
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn Together 🤝</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your creations, help friends, and celebrate each other's awesome achievements in our fun community!
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Builders 🚀</h3>
              <p className="text-gray-600 leading-relaxed">
                Today's young creators become tomorrow's inventors, scientists, and world-changers!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEM Subjects Section */}
      <section id="subjects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Adventure! 🎯</h2>
            <p className="text-xl text-gray-600">
              Pick what excites you most - or try them all!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Atom className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Science Magic ⚗️</h3>
              <p className="text-gray-600 mb-6">
                Make volcanoes explode, grow crystals, and create colorful reactions that will amaze everyone!
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-2">
                <span>Start Experimenting</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Building 💻</h3>
              <p className="text-gray-600 mb-6">
                Build robots, create games, and program cool gadgets that light up and move around!
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-2">
                <span>Start Coding</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engineering Fun 🔧</h3>
              <p className="text-gray-600 mb-6">
                Design bridges, build towers, and create machines that solve real problems!
              </p>
              <button className="text-orange-600 font-semibold hover:text-orange-700 flex items-center space-x-2">
                <span>Start Building</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Math Adventures 🧮</h3>
              <p className="text-gray-600 mb-6">
                Solve puzzles, create art with numbers, and discover the magic patterns all around us!
              </p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center space-x-2">
                <span>Start Exploring</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">FREE Project Adventures! 🎉</h2>
            <p className="text-xl text-gray-600">
              Every single project is completely FREE - start building amazing things right now!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      100% FREE! 🎁
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">FREE</span>
                    </div>
                    <button 
                      onClick={() => setSelectedCourse(course)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                    >
                      Start Now! 🚀
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Amazing Kids' Creations! 🌟</h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out the incredible projects made by kids just like you!
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Upload className="h-5 w-5" />
              <span>Share Your Creation!</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors">
                      <Heart className="h-5 w-5" />
                      <span className="font-medium">{item.likes}</span>
                    </button>
                    <span className="text-sm text-gray-500">❤️ Amazing work!</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Want to see your project here? Share it with us! 📸
            </p>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-2xl font-bold hover:bg-purple-600 hover:text-white transition-all">
              Upload Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join Our Amazing STEM Family! 👨‍👩‍👧‍👦</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with young scientists, share your creations, and celebrate each other's awesome achievements!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Young Scientists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Fun Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Creations Shared</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              Join the Fun! 🎉
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Help or Have Questions? 🤔</h2>
              <p className="text-xl text-gray-600">
                We're here to help you on your amazing STEM journey!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What should we call you?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Age</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How old are you?"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parent's Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Parent or guardian's email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">What do you want to know?</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>I need help with a project</option>
                    <option>I want to share my creation</option>
                    <option>I have a cool idea</option>
                    <option>Something else awesome</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us more!</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's on your mind? We'd love to hear from you! 😊"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>Send Message! 📨</span>
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
                <span className="text-xl font-bold">STEM Kids Lab</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making STEM education free and fun for every child. Building tomorrow's innovators, one project at a time! 🚀
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Free Projects</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Robot Building 🤖</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Science Experiments ⚗️</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Math Adventures 🧮</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Engineering Fun 🔧</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Share Your Builds 📸</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Get Help 🤝</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories 🌟</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parent Resources 👨‍👩‍👧‍👦</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center ❓</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines 🛡️</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us 📧</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy 🔒</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 STEM Kids Lab. All rights reserved. Built with ❤️ for curious young minds everywhere. 🌟</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;