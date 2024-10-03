"use client";
import React from "react";
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src={logoImg} alt="Logo" className="mr-2" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link to="/tasks" className="hover:text-blue-200">Tasks</Link></li>
          <li><Link to="/info" className="hover:text-blue-200">Information</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-blue-100">Sign In</button>
          <button className="bg-white text-blue-500 px-3 py-1 rounded hover:bg-blue-100">Sign Up</button>
          <select className="bg-white text-blue-500 px-2 py-1 rounded">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
