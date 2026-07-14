"use client";
import { useState, useEffect } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'testimonials', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Special case: if we're near the bottom of the page, highlight contact
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Regular section detection
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll event listener with passive option to avoid deprecation warnings
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return <div className="sticky top-3 z-10 flex w-full justify-center px-2 sm:px-0">
    <nav className="flex max-w-full flex-wrap justify-center gap-1 rounded-[1.25rem] border border-white/15 bg-white/10 p-1.5 backdrop-blur sm:rounded-full sm:p-1">
      {navItems.map((item) => (
        <a 
          key={item.id}
          href={item.href} 
          className={`nav-item whitespace-nowrap px-3 py-1.5 text-xs transition-all duration-500 sm:px-4 sm:text-sm ${
            activeSection === item.id 
              ? 'bg-white text-gray-900 hover:bg-white/80' 
              : 'hover:bg-emerald-400/20 hover:text-emerald-300'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>;
};
