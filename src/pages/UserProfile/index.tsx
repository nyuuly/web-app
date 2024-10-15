import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { FiXCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

interface UserProfileProps {
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onClose }) => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    sessionStorage.clear();
    onClose();
    navigate("/", { replace: true });
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto text-black"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">User Profile</h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-700"
          >
            <FiXCircle/>
          </button>
        </div>
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle size={80} className="text-gray-400 mb-2" />
          <p className="text-lg font-semibold">John Doe</p>
        </div>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Change Avatar
          </button>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Reset Password
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-blue-100 text-black py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
