import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailInput: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    // Here you can add email validation logic if needed
    navigate('/signup/verification');
  };

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-2xl font-bold mb-4">Enter your email</h1>
      <input 
        type="email" 
        placeholder="Your email" 
        className="border p-2 mb-4 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        onClick={handleNext} 
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Next Page
      </button>
    </div>
  );
};

export default EmailInput;
