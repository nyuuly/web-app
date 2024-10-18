import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const UserProfile: React.FC = () => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [language, setLanguage] = useState('en');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>

      {/* Personal Information Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2">Email Address</label>
            <div className="flex">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow border rounded-l px-3 py-2"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Update</button>
            </div>
          </div>
          <div>
            <label htmlFor="displayName" className="block mb-2">Display Name</label>
            <div className="flex">
              <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="flex-grow border rounded-l px-3 py-2"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Save</button>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* Language Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Language</h2>
        <div className="flex">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="flex-grow border rounded-l px-3 py-2"
          >
            <option value="en">English</option>
            <option value="ja">日本語</option>
            <option value="vi">Tiếng Việt</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Save</button>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* Others Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Others</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <Link to="/terms" className="text-blue-500 hover:underline">Terms and Conditions</Link>
          <Link to="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* Logout Section */}
      <section>
        <button
          onClick={handleLogout}
          className="text-orange-400 px-4 py-2 rounded"
        >
          Logout
        </button>
      </section>
    </div>
  );
};

export default UserProfile;
