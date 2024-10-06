"use client";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.svg';
import { changeLanguage } from '../i18n/i18n'; // Import the changeLanguage function

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleChangeLanguage = async (lng: string) => {
    await changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

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
              <button className="text-white hover:text-orange-200 text-sm">{t('help')}</button>
              <div className="relative">
                <button 
                  className="text-white hover:text-orange-200 text-sm"
                  onMouseEnter={() => setIsLanguageMenuOpen(true)}
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                >
                  {t('language')}: {i18n.language.toUpperCase()}
                </button>
                {isLanguageMenuOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-48 bg-blue-100 shadow-lg"
                    onMouseLeave={() => setIsLanguageMenuOpen(false)}
                  >
                    <button onClick={() => handleChangeLanguage('en')} className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left">English</button>
                    <button onClick={() => handleChangeLanguage('vi')} className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left">Tiếng Việt</button>
                    <button onClick={() => handleChangeLanguage('ja')} className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left">日本語</button>
                  </div>
                )}
              </div>
              <button className="text-white hover:text-orange-200 text-sm">{t('signin')}</button>
              <span className="text-white text-sm">|</span>
              <button className="text-white hover:text-orange-200 text-sm">{t('register')}</button>
            </div>
          </div>
        </div>

        {/* Bottom row: Navigation items */}
        <nav className="flex justify-center">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-orange-200 px-2">{t('home')}</Link></li>
            <li><Link to="/about" className="hover:text-orange-200 px-2">{t('aboutUs')}</Link></li>
            <li><Link to="/tasks" className="hover:text-orange-200 px-2">{t('taskList')}</Link></li>
            <li><Link to="/info" className="hover:text-orange-200 px-2">{t('informationHub')}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
