import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Send, CheckCircle, AlertCircle, Globe } from 'lucide-react';
import { translations } from './locales.js';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState('en');
  
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'tr' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const encode = (data) => {
    const params = new URLSearchParams();
    for (const key in data) {
      params.append(key, data[key]);
    }
    return params.toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: t.contact.emptyFields
      });
      return;
    }
    setIsSending(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData })
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: t.contact.success });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: t.contact.error });
    } finally {
      setIsSending(false);
      setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    }
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
                Tunahan BAŞAR
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
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
              <button 
                onClick={toggleLang}
                className="ml-4 flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-full transition-colors border border-gray-600"
              >
                <Globe size={16} />
                <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 bg-gray-800 text-white px-3 py-1.5 rounded-full border border-gray-600"
              >
                <Globe size={16} />
                <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
              </button>
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
          <div className="md:hidden bg-black/40 backdrop-blur-lg border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
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

      {/* Main Content */}
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t.hero.greeting}
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t.hero.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
                {t.hero.title}
              </p>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  {t.hero.contactBtn}
                </button>
                <a
                  href="/Hilmi_Tunahan_Basar_CV.pdf"
                  download
                  className="border border-purple-400 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  {t.hero.cvBtn}
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end z-10">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl relative z-10 bg-gray-800">
                  <img
                    src="/images/PP.jpg"
                    alt="Tunahan Başar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.about.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="col-span-2 md:col-span-3 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                <img src="/images/bir.jpg" alt="Setup" className="w-full h-40 md:h-56 object-cover" />
              </div>
              <div className="col-span-2 md:col-span-3 rounded-2xl overflow-hidden border border-purple-700 shadow-xl md:mt-6">
                <img src="/images/iki.jpg" alt="Projects" className="w-full h-40 md:h-56 object-cover" />
              </div>
              <div className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden border border-blue-700 shadow-xl">
                <img src="/images/uc.jpg" alt="Tech" className="w-full h-40 md:h-56 object-cover" />
              </div>
              <div className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden border border-pink-700 shadow-xl md:mt-4">
                <img src="/images/dort.jpg" alt="Code" className="w-full h-40 md:h-56 object-cover" />
              </div>
              <div className="col-span-2 md:col-span-2 rounded-2xl overflow-hidden border border-green-500 shadow-xl md:-mt-2">
                <img src="/images/resim.jpeg" alt="Extra" className="w-full h-48 md:h-64 object-cover object-center" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">{t.about.whoAmI}</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.experience.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.experience.subtitle}
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {t.experience.roles.map((role) => (
              <div key={role.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{role.title}</h3>
                    <p className="text-lg text-purple-400 font-medium">{role.company}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 bg-white/10 px-4 py-1.5 rounded-full text-sm font-semibold text-gray-300 border border-white/5">
                    {role.date}
                  </span>
                </div>
                <p className="text-gray-300 italic mb-6 border-l-2 border-purple-500 pl-4">{role.description}</p>
                <ul className="space-y-4">
                  {role.points.map((point, idx) => {
                    const [bold, rest] = point.split(': ');
                    return (
                      <li key={idx} className="flex gap-3 text-gray-400">
                        <span className="text-purple-500 mt-1">✦</span>
                        <span>
                          {rest ? <><strong className="text-gray-200">{bold}:</strong> {rest}</> : point}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.projects.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((proj, idx) => (
              <div key={idx} className="group bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/60 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{proj.name}</h3>
                    <span className="text-xs font-semibold tracking-wider uppercase text-pink-400 mt-1 block">{proj.type}</span>
                  </div>
                  <a href={proj.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-200 font-medium mb-4">{proj.desc}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{proj.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.skills.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.skills.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.skills.categories.map((cat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm">✓</span>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span key={i} className="bg-gray-800/80 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-6 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Infrastructure / DevOps</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.skills.devopsDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">{t.contact.info}</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{t.contact.email}</p>
                      <a href="mailto:basartuna35@gmail.com" className="text-white text-lg font-medium hover:text-purple-400 transition-colors">basartuna35@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <a href="tel:+905414581131" className="text-white text-lg font-medium hover:text-purple-400 transition-colors">+90 541 458 1131</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white text-lg font-medium">Izmir, Türkiye</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-10 pt-8 border-t border-white/10">
                  <a href="https://github.com/tunaBasar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Github size={20} className="text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/tuna-ba%C5%9Far/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Linkedin size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">{t.contact.sendMessage}</h3>
              
              {formStatus.message && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  formStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-300' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-300'
                }`}>
                  {formStatus.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <span className="font-medium">{formStatus.message}</span>
                </div>
              )}

              <form name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">{t.contact.name}</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    placeholder={t.contact.namePlaceholder} disabled={isSending}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">{t.contact.email}</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    placeholder={t.contact.emailPlaceholder} disabled={isSending}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-medium">{t.contact.message}</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleInputChange} rows="4"
                    className="w-full px-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                    placeholder={t.contact.messagePlaceholder} disabled={isSending}
                  />
                </div>

                <button 
                  type="submit" disabled={isSending}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isSending ? (
                    <><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>{t.contact.sending}</>
                  ) : (
                    <><Send size={20} />{t.contact.sendBtn}</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <p className="text-gray-400 font-medium">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;