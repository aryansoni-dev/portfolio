"use client";
import { useState, useEffect } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
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
    { href: '#about', label: 'About', id: 'about' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return <div className="flex justify-center items-center sticky top-3 z-10">
    <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      {navItems.map((item) => (
        <a 
          key={item.id}
          href={item.href} 
          className={`nav-item transition-all duration-500 ${
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
