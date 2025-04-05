
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mekloy-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mekloy Integrated Services</h3>
            <p className="mb-4 text-gray-300">
              Electrical production company in the heart of Bayelsa state, Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-mekloy-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-mekloy-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-mekloy-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  Home
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
              <li>
                <Link to="/#products" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/#sectors" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  Sectors
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Concrete Vibrated Electrical Poles</li>
              <li className="text-gray-300">Electrical Products Retail</li>
              <li className="text-gray-300">Industrial Solutions</li>
              <li className="text-gray-300">Domestic Decor</li>
              <li className="text-gray-300">Solar Solutions</li>
              <li className="text-gray-300">Logistics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">Bayelsa State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <a href="tel:+2348060000000" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  +234 806 000 0000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <a href="mailto:info@mekloy.com" className="text-gray-300 hover:text-mekloy-yellow transition-colors">
                  info@mekloy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Mekloy Integrated Services Company Limited. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-mekloy-yellow text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-mekloy-yellow text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
