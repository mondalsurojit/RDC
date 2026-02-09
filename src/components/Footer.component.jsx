import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* LOGO & DESCRIPTION */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 overflow-hidden flex items-center justify-center bg-transparent">
                <img src="/iith_logo.png" alt="IIT Hyderabad Logo"
                  className="w-full h-full object-contain"/>
              </div>
              <span className="font-semibold tracking-tight text-base sm:text-lg">Rural Development Centre</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming rural India through innovation and sustainable development.
            </p>
          </div>

          {/* QUICK LINKS - 2 COLUMNS ON DESKTOP */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/members" className="hover:text-white transition-colors">Members</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* WE SUPPORT */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">We Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://people.iith.ac.in/uba/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Unnat Bharat Abhiyan</a></li>
              <li><a href="https://nss.iith.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">National Service Scheme</a></li>
              <li><a href="https://prayas.rdc.iith.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Prayas</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:chair.rdc@iith.ac.in" className="hover:text-white transition-colors break-all">
                  chair.rdc@iith.ac.in
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">IIT Hyderabad, Kandi, Sangareddy, Telangana 502284</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>© 2026 Rural Development Centre, IIT Hyderabad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;