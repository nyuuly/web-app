import React from 'react';
import { useNavigate } from 'react-router-dom';

const Questions: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-2xl font-bold mb-4">Additional Questions</h1>
      {/* Add your questions here */}
      <button onClick={handleNext} className="bg-blue-700 text-white px-4 py-2 rounded">
        Finish
      </button>
    </div>
  );
};

export default Questions;
