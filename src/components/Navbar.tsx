
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

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
    scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={navClassName}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-mekloy-blue font-bold text-2xl">MEKLOY</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-mekloy-blue font-medium transition-colors"
              onClick={handleNavLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call Button */}
        <a 
          href="tel:+2348060000000" 
          className="hidden md:flex items-center gap-2 text-mekloy-blue hover:text-blue-700 font-medium"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-mekloy-blue py-2 font-medium transition-colors"
                onClick={handleNavLinkClick}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+2348060000000" 
              className="flex items-center gap-2 text-mekloy-blue hover:text-blue-700 font-medium py-2"
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
