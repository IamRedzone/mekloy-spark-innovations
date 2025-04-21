
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Logo from '@/components/Logo';

gsap.registerPlugin(ScrollToPlugin);

// Updated navigation links - reduced to 4 options
const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Sectors', path: '/#sectors' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adding higher z-index to ensure navbar is above all other content
  const navClassName = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md py-2' : 'bg-mekloy-blue/95 py-4'
  }`;

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: section, offsetY: 80 },
        ease: "power3.inOut"
      });
    }
  }, []);

  const handleNavLinkClick = (path: string) => {
    setIsOpen(false);
    
    if (path.includes('#') && location.pathname === '/') {
      const sectionId = path.split('#')[1];
      scrollToSection(sectionId);
    }
  };

  const linkClassName = scrolled 
    ? "text-mekloy-blue hover:text-mekloy-blue/80 font-medium transition-colors relative" 
    : "text-white hover:text-mekloy-yellow font-medium transition-colors relative";

  return (
    <nav className={navClassName}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 z-50 group">
          <Logo 
            className={`mr-1 transition-all duration-300 group-hover:rotate-12`} 
            color={scrolled ? "#1E3A8A" : "#FFC107"} 
            size={24}
          />
          <span className={scrolled ? "text-mekloy-blue font-nexa font-bold text-2xl" : "text-white font-nexa font-bold text-2xl"}>Mekloy</span>
        </Link>

        {/* Desktop Navigation - now with more space between fewer items */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={linkClassName}
              onClick={() => handleNavLinkClick(link.path)}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-mekloy-yellow transform origin-left transition-transform duration-300 ${hoveredLink === link.name ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </Link>
          ))}
        </div>

        {/* Call Button - Fixed contrast issues */}
        <a 
          href="tel:+2348143728843" 
          className={scrolled 
            ? "hidden md:flex items-center gap-2 text-white bg-mekloy-blue px-4 py-2 rounded-md hover:bg-mekloy-blue/90 font-medium transition-colors transform hover:scale-105" 
            : "hidden md:flex items-center gap-2 text-mekloy-blue bg-mekloy-yellow px-4 py-2 rounded-md hover:bg-amber-300 font-medium transition-all transform hover:scale-105"}
        >
          <Phone size={18} className="animate-pulse" />
          <span>Call Now</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={scrolled ? "md:hidden text-mekloy-blue z-50" : "md:hidden text-white z-50"}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-mekloy-blue fixed inset-0 py-20 px-6 flex flex-col items-center justify-center z-40 animate-fade-in">
          <div className="flex flex-col space-y-6 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-mekloy-yellow py-2 font-medium transition-colors text-xl relative group"
                onClick={() => handleNavLinkClick(link.path)}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mekloy-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a 
              href="tel:+2348143728843" 
              className="flex items-center gap-2 text-mekloy-blue bg-mekloy-yellow px-6 py-3 rounded-md hover:bg-amber-300 font-medium mt-4 transition-all transform hover:scale-105"
            > 
              <Phone size={18} className="animate-pulse" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
