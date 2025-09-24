import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'Gallery', 'About', 'Contact'];

  const scrollToSection = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-md shadow-xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-deepsky-400 transition-colors duration-300 font-medium tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-deepsky-400 to-deepsky-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="h-4 w-4 text-deepsky-400" />
              <span className="font-numeric">+91 9876543210</span>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-white hover:text-deepsky-400 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/5"
              >
                {item}
              </button>
            ))}
            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300 px-4 py-2">
                <Phone className="h-4 w-4 text-deepsky-400" />
                <span className="font-numeric">+91 9876543210</span>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 bg-gradient-to-r from-deepsky-400 to-deepsky-600 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-deepsky-400/50 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;