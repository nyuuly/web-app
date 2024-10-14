import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 pb-24">
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-wrap justify-between mb-8">
          {/* Logo column */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link to="/" className="inline-block">
              <img src={logoImg} alt="Nyuuly Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Our offering column */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Our offering</h3>
            <ul className="space-y-2">
              <li><Link to="/tasks" className="hover:text-orange-200">Task List</Link></li>
              <li><Link to="/info" className="hover:text-orange-200">Information Hub</Link></li>
            </ul>
          </div>

          {/* About column */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/mission" className="hover:text-orange-200">Our mission</Link></li>
            </ul>
          </div>

          {/* Social media links and email */}
          <div className="w-full md:w-1/4 flex flex-col items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <a href="mailto:info@nyuuly.com" className="hover:text-orange-200">info@nyuuly.com</a>
          </div>
        </div>

        {/* Bottom row with smaller font */}
        <div className="border-t border-white pt-4 flex justify-between items-center text-sm">
          <p>&copy; 2024 Nyuuly.com All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:text-orange-200">Privacy Policy</Link>
            <Link to="/accessibility" className="hover:text-orange-200">Accessibility</Link>
            <Link to="/terms" className="hover:text-orange-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;