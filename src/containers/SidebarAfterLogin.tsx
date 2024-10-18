"use client";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FiGlobe,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiHome,
  FiList,
  FiInfo,
  FiUser,
} from "react-icons/fi";
import logoImg from "../assets/logo.svg";
import { changeLanguage } from "../i18n/i18n";
import { useAuth } from "../contexts/AuthContext";

const SidebarAfterLogin: React.FC = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleChangeLanguage = async (lng: string) => {
    await changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 h-full w-64 text-white flex flex-col"
    style={{
      background:
        "linear-gradient(180deg, #051C58 0%, #3D4EDD 51%, #FFA555 100%)",
    }}>
      <div className="p-4">
        <img src={logoImg} alt="Logo" className="h-8 w-auto mb-8" />
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className={`flex items-center p-4 transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-white bg-opacity-20 text-white' 
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <FiHome className="mr-2" />
              {t("home")}
            </Link>
          </li>
          <li>
            <Link 
              to="/tasks" 
              className={`flex items-center p-4 transition-colors duration-200 ${
                isActive('/tasks') 
                  ? 'bg-white bg-opacity-20 text-white' 
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <FiList className="mr-2" />
              {t("taskList")}
            </Link>
          </li>
          <li>
            <Link 
              to="/info" 
              className={`flex items-center p-4 transition-colors duration-200 ${
                isActive('/info') 
                  ? 'bg-white bg-opacity-20 text-white' 
                  : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <FiInfo className="mr-2" />
              {t("informationHub")}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-white border-opacity-20">
        <button className="flex items-center w-full p-2 hover:bg-white hover:bg-opacity-10 transition-colors duration-200" onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}>
          <FiGlobe className="mr-2" />
          {t("language")}
          {isLanguageMenuOpen ? <FiChevronUp className="ml-auto" /> : <FiChevronDown className="ml-auto" />}
        </button>
        {isLanguageMenuOpen && (
          <div className="mt-2 space-y-2">
            <button onClick={() => handleChangeLanguage("en")} className="w-full text-left p-2 hover:bg-white hover:bg-opacity-10 transition-colors duration-200">English</button>
            <button onClick={() => handleChangeLanguage("vi")} className="w-full text-left p-2 hover:bg-white hover:bg-opacity-10 transition-colors duration-200">Tiếng Việt</button>
            <button onClick={() => handleChangeLanguage("ja")} className="w-full text-left p-2 hover:bg-white hover:bg-opacity-10 transition-colors duration-200">日本語</button>
          </div>
        )}
        <Link 
          to="/profile" 
          className="flex items-center w-full p-2 mt-2 hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
        >
          <FiUser className="mr-2" />
          Profile
        </Link>
        <button className="flex items-center w-full p-2 mt-2 hover:bg-white hover:bg-opacity-10 transition-colors duration-200" onClick={handleLogout}>
          <FiX className="mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SidebarAfterLogin;
