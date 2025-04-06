'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'works', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
          href="#" 
          className="text-2xl font-bold" 
          onClick={(e) => {
            e.preventDefault(); 
            scrollToSection('home')
          }}
          >
            Odush
          </a>

          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#works"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('works');
                  }}
                  className={`text-sm hover:text-black transition-colors ${
                    activeSection === 'works' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className={`text-sm hover:text-black transition-colors ${
                    activeSection === 'about' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className={`text-sm hover:text-black transition-colors ${
                    activeSection === 'services' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className={`text-sm hover:text-black transition-colors ${
                    activeSection === 'contact' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Book a Call Button */}
          <a
            href="https://calendly.com/adrianoduma8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn px-8 py-3 text-white bg-[#1A1A1A] text-sm hover:bg-black/80 transition-colors"
          >
            Book a Call
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden sm:bg-gray-300 pb-6 backdrop-blur-lg bg-opacity-90 z-40 transition-opacity duration-300 ease-in-out"
        >
          <div className="px-4 py-2">
            <ul className="space-y-4">
              <li>
                <a
                  href="#works"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('works');
                  }}
                  className={`block py-2 text-base ${
                    activeSection === 'works' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className={`block py-2 text-base ${
                    activeSection === 'about' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className={`block py-2 text-base ${
                    activeSection === 'services' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className={`block py-2 text-base ${
                    activeSection === 'contact' ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  Contact
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="https://calendly.com/adrianoduma8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full text-center px-8 py-4 text-white bg-[#1A1A1A] text-base hover:bg-black/80 transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </nav>
  );
} 