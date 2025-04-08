
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mekloy-blue text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-nexa font-bold mb-6">Mekloy Integrated Services</h3>
            <p className="mb-6 text-gray-300 max-w-md">
              Premium electrical and concrete solutions in Bayelsa State, Nigeria. Delivering quality that powers progress.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-mekloy-yellow" />
                <span className="text-gray-300">Bayelsa State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-mekloy-yellow" />
                <a href="tel:+2348060000000" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  +234 806 000 0000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-mekloy-yellow" />
                <a href="mailto:info@mekloy.com" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  info@mekloy.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-2xl font-nexa font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 md:text-right">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#sectors" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  Sectors
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mekloy-yellow hover:text-mekloy-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mekloy-yellow hover:text-mekloy-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mekloy-yellow hover:text-mekloy-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Mekloy Integrated Services Company Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
