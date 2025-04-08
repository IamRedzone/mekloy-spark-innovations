
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/#products' },
  { name: 'Sectors', path: '/#sectors' },
  { name: 'Vision', path: '/#vision' },
  { name: 'Logistics', path: '/#logistics' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    ? "text-mekloy-blue hover:text-mekloy-blue/80 font-medium transition-colors" 
    : "text-white hover:text-mekloy-yellow font-medium transition-colors";

  return (
    <nav className={navClassName}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center z-50">
          <span className={scrolled ? "text-mekloy-blue font-nexa font-bold text-2xl" : "text-white font-nexa font-bold text-2xl"}>MEKLOY</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={linkClassName}
              onClick={() => handleNavLinkClick(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call Button */}
        <a 
          href="tel:+2348060000000" 
          className={scrolled 
            ? "hidden md:flex items-center gap-2 text-white bg-mekloy-blue px-4 py-2 rounded-md hover:bg-mekloy-blue/90 font-medium transition-colors" 
            : "hidden md:flex items-center gap-2 text-mekloy-blue bg-white px-4 py-2 rounded-md hover:bg-gray-100 font-medium transition-colors"}
        >
          <Phone size={18} />
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
                className="text-white hover:text-mekloy-yellow py-2 font-medium transition-colors text-xl"
                onClick={() => handleNavLinkClick(link.path)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+2348060000000" 
              className="flex items-center gap-2 text-mekloy-blue bg-white px-6 py-3 rounded-md hover:bg-gray-100 font-medium mt-4"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
