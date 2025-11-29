import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tunahan BAŞAR
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About Me' },
                  { id: 'contact', label: 'Contact Me' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeSection === item.id
                      ? 'text-purple-400 bg-purple-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'contact', label: 'Contact Me' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I'm
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tuna
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Backend Developer
              </p>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                I am a final-year Computer Engineering student at Isparta University of Applied Sciences, graduating in 2026. I specialize in backend development with deep expertise in Java (Spring Boot) and .NET Core technologies. With hands-on experience in distributed systems from my internship at i2i Systems working on microservice architectures using Apache Kafka, Hazelcast, Akka, and VoltDB, I bring both academic knowledge and real-world corporate project experience to the table.

                I am passionate about building scalable backend systems, working with modern technologies like Docker, Redis, and PostgreSQL, and following Agile/Scrum methodologies. As a team-oriented engineer with strong communication skills, I thrive in collaborative environments and am eager to contribute to challenging projects in the tech industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact
                </button>
                <a
                  href="/HilmiTunahanBasarCV.pdf"
                  download
                  className="border border-purple-400 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  CV Download
                </a>

              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* PROFİL FOTOĞRAFI */}
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl">
                  <img
                    src="/images/PP.jpg"
                    alt="Tunahan Başar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -z-10 w-80 h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I combine technology and imagination to create impactful solutions in the digital world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {/* ÇALIŞMA ALANI FOTOĞRAFI */}
              <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                <img
                  src="/images/bir.jpg"
                  alt="Çalışma Alanım"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* PROJE FOTOĞRAFI */}
              <div className="rounded-2xl overflow-hidden border border-purple-700 shadow-2xl">
                <img
                  src="/images/iki.jpg"
                  alt="Projelerim"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* TEKNOLOJİ FOTOĞRAFI */}
              <div className="rounded-2xl overflow-hidden border border-blue-700 shadow-2xl">
                <img
                  src="/images/uc.jpg"
                  alt="Teknoloji"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-blue-700 shadow-2xl">
                <img
                  src="/images/dort.jpg"
                  alt="Teknoloji"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Who am I?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Hello, I'm Hilmi Tunahan Başar — a final-year Computer Engineering student at Isparta University of Applied Sciences, graduating in 2026, with a sharp focus on backend development and distributed systems.

                  I specialize in Java (Spring Boot) and .NET Core, building scalable microservices architectures and RESTful APIs. During my internship at i2i Systems, I worked on "Evrencell," a distributed Online Charging System (OCS) using Apache Kafka, Hazelcast, Akka, and VoltDB, where I actively participated in live migration processes on German servers and experienced Agile/Scrum methodologies with Jira tracking.

                  Currently, I'm working remotely as a Backend Developer at Tavia, developing a cafe reservation application using Spring Boot microservices, PostgreSQL, Redis, and Docker. I also have expertise in Cloud Computing and Infrastructure Management, including managing physical and virtual servers, AWS services, and system administration tasks.

                  Beyond coding, I'm passionate about continuous learning and sharing knowledge. I've delivered in-depth presentations on "The Pragmatic Programmer" and "Refactoring," exploring real-world software development principles such as clean code, maintainability, and iterative improvement.

                  I thrive in collaborative, agile teams and enjoy translating complex problems into elegant, efficient solutions. Whether it's designing database schemas, optimizing caching strategies, or containerizing applications, I strive to build software that's both robust and meaningful.

                  If you're working on a project that needs a backend developer who values craftsmanship, communication, and continuous growth, I'd be thrilled to connect.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Java & Spring Boot',
                    'C# & .NET Core',
                    'PostgreSQL & MSSQL',
                    'Redis & MongoDB',
                    'Docker',
                    'Apache Kafka',
                    'Cloud Computing (AWS)',
                    'Server Management',
                    'Git & GitHub',
                    'DevOps Principles',
                    'Linux (Ubuntu)',
                    'Agile/Scrum'
                  ].map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-3 text-white text-center border border-purple-500/30">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Projects</h3>
                <div className="space-y-4">

                  {/* Evrencell */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      EV
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Evrencell</h4>
                      <p className="text-gray-400 text-sm">Staj döneminde geliştirilen mikroservis tabanlı telekom projesi.</p>
                    </div>
                    <a
                      href="https://github.com/tunaBasar/evrencell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto"
                    >
                      <ExternalLink size={20} className="text-purple-400 hover:text-purple-600 transition-colors duration-200" />
                    </a>
                  </div>

                  {/* BloodDonationApp */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold">
                      BD
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">BloodDonationApp</h4>
                      <p className="text-gray-400 text-sm">Kan bağışı yönetimi için .NET MAUI ve C# ile geliştirilen mobil uygulama.</p>
                    </div>
                    <a
                      href="https://github.com/tunaBasar/BloodDonationApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto"
                    >
                      <ExternalLink size={20} className="text-purple-400 hover:text-purple-600 transition-colors duration-200" />
                    </a>
                  </div>

                  {/* Tavia */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                      TV
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Tavia</h4>
                      <p className="text-gray-400 text-sm">Cafe reservation backend using Spring Boot, Microservices, PostgreSQL, Redis, and Docker.</p>
                    </div>
                    <a
                      href="https://github.com/tunaBasar/Tavia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto"
                    >
                      <ExternalLink size={20} className="text-purple-400 hover:text-purple-600 transition-colors duration-200" />
                    </a>
                  </div>

                  {/* SoftSim Simulation */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                      SS
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">SoftSim Simulation</h4>
                      <p className="text-gray-400 text-sm">A Full Stack project simulating the Software Development Life Cycle (SDLC), managing SRS documentation and Unit Tests (JUnit).</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              If you'd like to collaborate on a project or simply say hello, feel free to get in touch!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-white">basartuna35@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone Number</p>
                      <p className="text-white">+90 541 458 1131</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">Izmir, Türkiye</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/tunaBasar" className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Github size={20} className="text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/tuna-ba%C5%9Far/" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Linkedin size={20} className="text-white" />
                  </a>
                  <a href="basartuna35@gmail.com" className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Mail size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Enter name please"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Mail"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Your message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                    placeholder="Message"
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 [Hilmi Tunahan Başar]. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;