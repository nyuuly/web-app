"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiGlobe, FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaRegQuestionCircle, FaRegUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from '../assets/logo.svg';
import { changeLanguage } from '../i18n/i18n';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLanguageMenuOpen, setIsMobileLanguageMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleChangeLanguage = async (lng: string) => {
    await changeLanguage(lng);
    setIsLanguageMenuOpen(false);
    setIsMobileLanguageMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-blue-700 text-white pt-4 pb-2 px-4 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src={logoImg} alt="Logo" className="h-8 w-auto" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 bg-blue-600 px-4 py-2 rounded-full">
            <button className="text-white hover:text-orange-200 text-sm flex items-center">
              <FaRegQuestionCircle className="mr-1"/>{t('help')}
            </button>
            <div className="relative" ref={languageMenuRef}>
              <button 
                className="text-white hover:text-orange-200 text-sm flex items-center"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              >
                <FiGlobe className="mr-1" />{t('language')}
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-blue-100 shadow-lg">
                  <button onClick={() => handleChangeLanguage('en')} className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left">English</button>
                  <button onClick={() => handleChangeLanguage('vi')} className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left">Tiếng Việt</button>
                  <button onClick={() => handleChangeLanguage('ja')} className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left">日本語</button>
                </div>
              )}
            </div>
            <button className="text-white hover:text-orange-200 text-sm flex items-center">
              <FaRegUserCircle className="mr-1"/>{t('signin')}
            </button>
            <button className="text-white hover:text-orange-200 text-sm">{t('register')}</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              className="md:hidden absolute left-0 right-0 bg-blue-700 shadow-lg z-50"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <nav className="flex flex-col space-y-2 p-4">
                <Link to="/" className={`hover:text-orange-200 p-1 ${isActive('/') ? 'border-b-2 border-orange-400 text-orange-400' : ''}`} onClick={closeMobileMenu}>{t('home')}</Link>
                <Link to="/about" className={`hover:text-orange-200 p-1 ${isActive('/about') ? 'border-b-2 border-orange-400 text-orange-400' : ''}`} onClick={closeMobileMenu}>{t('aboutUs.title')}</Link>
                <Link to="/tasks" className={`hover:text-orange-200 p-1 ${isActive('/tasks') ? 'border-b-2 border-orange-400 text-orange-400' : ''}`} onClick={closeMobileMenu}>{t('taskList')}</Link>
                <Link to="/info" className={`hover:text-orange-200 p-1 ${isActive('/info') ? 'border-b-2 border-orange-400 text-orange-400' : ''}`} onClick={closeMobileMenu}>{t('informationHub')}</Link>
              </nav>
              <div className="flex flex-col space-y-2 p-4 border-t border-blue-600">
                <button className="text-white hover:text-orange-200 text-sm flex items-center p-1" onClick={closeMobileMenu}>
                  <FaRegQuestionCircle className="mr-2"/>{t('help')}
                </button>
                <div className="p-1">
                  <button 
                    className="text-white hover:text-orange-200 text-sm flex items-center justify-between w-full"
                    onClick={() => setIsMobileLanguageMenuOpen(!isMobileLanguageMenuOpen)}
                  >
                    <span className="flex items-center">
                      <FiGlobe className="mr-2" />{t('language')}
                    </span>
                    {isMobileLanguageMenuOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {isMobileLanguageMenuOpen && (
                    <div className="ml-6 mt-2 space-y-2">
                      <button onClick={() => handleChangeLanguage('en')} className="block text-sm text-white hover:text-orange-200 w-full text-left">English</button>
                      <button onClick={() => handleChangeLanguage('vi')} className="block text-sm text-white hover:text-orange-200 w-full text-left">Tiếng Việt</button>
                      <button onClick={() => handleChangeLanguage('ja')} className="block text-sm text-white hover:text-orange-200 w-full text-left">日本語</button>
                    </div>
                  )}
                </div>
                <button className="text-white hover:text-orange-200 text-sm flex items-center p-1" onClick={closeMobileMenu}>
                  <FaRegUserCircle className="mr-2"/>{t('signin')}
                </button>
                <button className="text-white hover:text-orange-200 text-sm flex items-center p-1" onClick={closeMobileMenu}>
                <FaRegUserCircle className="mr-2"/>{t('register')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center mt-4">
          <ul className="flex space-x-6">
            <li><Link to="/" className={`hover:text-orange-200 px-2 py-1 ${isActive('/') ? 'border-b-2 border-orange-400 text-orange-400' : ''}`}>{t('home')}</Link></li>
            <li><Link to="/about" className={`hover:text-orange-200 px-2 py-1 ${isActive('/about') ? 'border-b-2 border-orange-400 text-orange-400' : ''}`}>{t('aboutUs.title')}</Link></li>
            <li><Link to="/tasks" className={`hover:text-orange-200 px-2 py-1 ${isActive('/tasks') ? 'border-b-2 border-orange-400 text-orange-400' : ''}`}>{t('taskList')}</Link></li>
            <li><Link to="/info" className={`hover:text-orange-200 px-2 py-1 ${isActive('/info') ? 'border-b-2 border-orange-400 text-orange-400' : ''}`}>{t('informationHub')}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;