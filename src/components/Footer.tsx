
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  return (
    <footer className="bg-mekloy-blue text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-nexa font-bold mb-6 flex items-center">
              <Zap className="mr-2 text-mekloy-yellow" /> 
              Mekloy Integrated Services
            </h3>
            <p className="mb-6 text-gray-300 max-w-md">
              Premium electrical and concrete solutions in Bayelsa State, Nigeria. Delivering quality that powers progress.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group hover:translate-x-1 transition-transform duration-300">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-mekloy-yellow group-hover:animate-pulse" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Bayelsa State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                <Phone size={20} className="text-mekloy-yellow group-hover:animate-pulse" />
                <a href="tel:+2348060000000" className="text-gray-300 group-hover:text-white transition-colors">
                  +234 806 000 0000
                </a>
              </div>
              <div className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300">
                <Mail size={20} className="text-mekloy-yellow group-hover:animate-pulse" />
                <a href="mailto:info@mekloy.com" className="text-gray-300 group-hover:text-white transition-colors">
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
                <Link to="/" className="text-gray-300 hover:text-mekloy-yellow transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-[-4px] transition-transform duration-300">Home</span>
                  <span className="w-0 h-0.5 bg-mekloy-yellow transition-all duration-300 ml-0 group-hover:w-4 group-hover:ml-2"></span>
                </Link>
              </li>
              <li>
                <Link to="/#sectors" className="text-gray-300 hover:text-mekloy-yellow transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-[-4px] transition-transform duration-300">Sectors</span>
                  <span className="w-0 h-0.5 bg-mekloy-yellow transition-all duration-300 ml-0 group-hover:w-4 group-hover:ml-2"></span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-mekloy-yellow transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-[-4px] transition-transform duration-300">Projects</span>
                  <span className="w-0 h-0.5 bg-mekloy-yellow transition-all duration-300 ml-0 group-hover:w-4 group-hover:ml-2"></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-mekloy-yellow transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-[-4px] transition-transform duration-300">Contact</span>
                  <span className="w-0 h-0.5 bg-mekloy-yellow transition-all duration-300 ml-0 group-hover:w-4 group-hover:ml-2"></span>
                </Link>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-8">
              {[
                { id: 1, icon: Facebook, href: "#" },
                { id: 2, icon: Instagram, href: "#" },
                { id: 3, icon: Linkedin, href: "#" }
              ].map((social) => (
                <a 
                  key={social.id}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mekloy-yellow hover:text-mekloy-blue transition-all duration-300 transform hover:scale-110"
                  onMouseEnter={() => setHoveredIcon(social.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <social.icon size={20} className={`transition-transform duration-300 ${hoveredIcon === social.id ? 'scale-125' : ''}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm group">
            &copy; {currentYear} Mekloy Integrated Services Company Limited. 
            <span className="inline-block ml-1">
              Powering <span className="group-hover:text-mekloy-yellow transition-colors duration-300">Nigeria's</span> Future
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
