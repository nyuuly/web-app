"use client";
import React from "react";
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white pt-4 pb-2 px-4">
      <div className="container mx-auto flex flex-col">
        {/* Top row: Logo and Help, Language, Signin | Register */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <img src={logoImg} alt="Logo" className="h-8 w-auto" />
          </Link>

          {/* Help, Language, Signin | Register */}
          <div className="bg-black bg-opacity-50 rounded-full px-4 py-2">
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-orange-200 text-sm">Help</button>
              <button className="text-white hover:text-orange-200 text-sm">Language</button>
              <button className="text-white hover:text-orange-200 text-sm">Signin</button>
              <span className="text-white text-sm">|</span>
              <button className="text-white hover:text-orange-200 text-sm">Register</button>
            </div>
          </div>
        </div>

        {/* Bottom row: Navigation items */}
        <nav className="flex justify-center">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-orange-200 px-2">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-200 px-2">About Us</Link></li>
            <li><Link to="/tasks" className="hover:text-orange-200 px-2">Task List</Link></li>
            <li><Link to="/info" className="hover:text-orange-200 px-2">Information Hub</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
