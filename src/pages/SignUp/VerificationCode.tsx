import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationCode: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/signup/questions');
  };

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-2xl font-bold mb-4">Enter verification code</h1>
      <input type="text" placeholder="Verification code" className="border p-2 mb-4 w-full" />
      <button onClick={handleNext} className="bg-blue-700 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default VerificationCode;
