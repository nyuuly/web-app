"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FiGlobe,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { FaRegQuestionCircle, FaRegUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.svg";
import { changeLanguage } from "../i18n/i18n";
import { useAuth } from "../contexts/AuthContext";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLanguageMenuOpen, setIsMobileLanguageMenuOpen] =
    useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isSignUpProcess =
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/signin");

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

  const handleHomeClick = () => {
    navigate("/", { replace: true });
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const isActive = (path: string) => location.pathname === path;

  const activeClass = "text-orange-400 border-b-4 border-orange-400 font-bold";
  const inactiveClass = "hover:text-orange-200";

  return (
    <header className="text-white pt-4 px-4 relative bg-blue-700">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div
            onClick={handleHomeClick}
            className="text-2xl font-bold cursor-pointer"
          >
            <img src={logoImg} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 bg-blue-600 px-4 py-2 rounded-full">
            <button className="text-white hover:text-orange-200 text-sm flex items-center">
              <FaRegQuestionCircle className="mr-1" />
              {t("help")}
            </button>
            <div className="relative" ref={languageMenuRef}>
              <button
                className="text-white hover:text-orange-200 text-sm flex items-center"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              >
                <FiGlobe className="mr-1" />
                {t("language")}
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-blue-100 shadow-lg">
                  <button
                    onClick={() => handleChangeLanguage("en")}
                    className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleChangeLanguage("vi")}
                    className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left"
                  >
                    Tiếng Việt
                  </button>
                  <button
                    onClick={() => handleChangeLanguage("ja")}
                    className="block px-4 py-2 text-sm text-black hover:bg-blue-200 w-full text-left"
                  >
                    日本語
                  </button>
                </div>
              )}
            </div>
            <>
              <button
                className="text-white hover:text-orange-200 text-sm flex items-center"
                onClick={handleSignIn}
              >
                <FaRegUserCircle className="mr-1" />
                {t("signin")}
              </button>
              <Link
                to="/signup"
                className="text-white hover:text-orange-200 text-sm"
              >
                {t("register")}
              </Link>
            </>
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
              className="md:hidden absolute left-0 right-0 shadow-lg z-50"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {!isSignUpProcess && (
                <nav className="flex flex-col space-y-2 p-4">
                  <div
                    onClick={() => {
                      handleHomeClick();
                      closeMobileMenu();
                    }}
                    className={`p-1 ${
                      isActive("/") ? activeClass : inactiveClass
                    }`}
                  >
                    {t("home")}
                  </div>
                  <Link
                    to="/about"
                    className={`p-1 ${
                      isActive("/about") ? activeClass : inactiveClass
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {t("aboutUs.title")}
                  </Link>
                  <Link
                    to="/tasks"
                    className={`p-1 ${
                      isActive("/tasks") ? activeClass : inactiveClass
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {t("taskList")}
                  </Link>
                  <Link
                    to="/info"
                    className={`p-1 ${
                      isActive("/info") ? activeClass : inactiveClass
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {t("informationHub")}
                  </Link>
                </nav>
              )}
              <div className="flex flex-col space-y-2 p-4 border-t border-blue-600">
                <button
                  className="text-white hover:text-orange-200 text-sm flex items-center p-1"
                  onClick={closeMobileMenu}
                >
                  <FaRegQuestionCircle className="mr-2" />
                  {t("help")}
                </button>
                <div className="p-1">
                  <button
                    className="text-white hover:text-orange-200 text-sm flex items-center justify-between w-full"
                    onClick={() =>
                      setIsMobileLanguageMenuOpen(!isMobileLanguageMenuOpen)
                    }
                  >
                    <span className="flex items-center">
                      <FiGlobe className="mr-2" />
                      {t("language")}
                    </span>
                    {isMobileLanguageMenuOpen ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>
                  {isMobileLanguageMenuOpen && (
                    <div className="ml-6 mt-2 space-y-2">
                      <button
                        onClick={() => handleChangeLanguage("en")}
                        className="block text-sm text-white hover:text-orange-200 w-full text-left"
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleChangeLanguage("vi")}
                        className="block text-sm text-white hover:text-orange-200 w-full text-left"
                      >
                        Tiếng Việt
                      </button>
                      <button
                        onClick={() => handleChangeLanguage("ja")}
                        className="block text-sm text-white hover:text-orange-200 w-full text-left"
                      >
                        日本語
                      </button>
                    </div>
                  )}
                </div>

                <button
                  className="text-white hover:text-orange-200 text-sm flex items-center p-1"
                  onClick={() => {
                    handleSignIn();
                    closeMobileMenu();
                  }}
                >
                  <FaRegUserCircle className="mr-2" />
                  {t("signin")}
                </button>
                <Link
                  to="/signup"
                  className="text-white hover:text-orange-200 text-sm flex items-center p-1"
                  onClick={closeMobileMenu}
                >
                  <FaRegUserCircle className="mr-2" />
                  {t("register")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        {!isSignUpProcess && (
          <nav className="hidden md:flex justify-center mt-4">
            <ul className="flex space-x-6">
              <li>
                <div
                  onClick={handleHomeClick}
                  className={`px-2 cursor-pointer ${
                    isActive("/") ? activeClass : inactiveClass
                  }`}
                >
                  {t("home")}
                </div>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`px-2 ${
                    isActive("/about") ? activeClass : inactiveClass
                  }`}
                >
                  {t("aboutUs.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className={`px-2 ${
                    isActive("/tasks") ? activeClass : inactiveClass
                  }`}
                >
                  {t("taskList")}
                </Link>
              </li>
              <li>
                <Link
                  to="/info"
                  className={`px-2 ${
                    isActive("/info") ? activeClass : inactiveClass
                  }`}
                >
                  {t("informationHub")}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
