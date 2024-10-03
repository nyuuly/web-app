"use client";
import React from "react";
import logo from "../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700">
      <div className="container mx-auto flex items-center justify-between p-4 shadow-sm">
        {/* container mx-auto p-4 */}
        {/* Logo or brand name */}
        <div className="text-xl font-bold">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation links */}
        <nav className="space-x-4">
          <a href="/" className="text-white-500 hover:text-orange-400">
            Home
          </a>
          <a href="/tasks" className="text-white-500 hover:text-orange-400">
            Tasks
          </a>
          <a href="/info" className="text-white-500 hover:text-orange-400">
            Information
          </a>
        </nav>

        {/* Right-aligned buttons */}
        <ul className="flex space-x-4 items-center">
          <li>
            <button className="px-3 py-1 text-sm text-white-500 hover:text-gray-900">
              Switch Language
            </button>
          </li>
          <li>
            <button className="px-3 py-1 text-sm text-white-500 hover:text-gray-900">
              Sign In
            </button>
          </li>
          <li>
            <button className="px-3 py-1 text-sm text-white-500 bg-indigo-600 rounded-md hover:bg-indigo-700">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
