import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center font-bold">
                RDC
              </div>
              <span className="font-bold text-lg">Rural Development Centre</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming rural India through innovation and sustainable development.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/members" className="hover:text-white transition-colors">Members</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">We Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://people.iith.ac.in/uba/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Unnat Bharat Abhiyan</a></li>
              <li><a href="https://nss.iith.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">National Service Scheme</a></li>
              <li><a href="https://prayas.rdc.iith.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Prayas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>chair.rdc@iith.ac.in</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>IIT Hyderabad, Kandi, Sangareddy, Telangana 502284</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Rural Development Centre, IIT Hyderabad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;