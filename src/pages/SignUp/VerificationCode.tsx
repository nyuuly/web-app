import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

const VerificationCode: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/signup/questions');
  };

  const handleBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <div className="container mx-auto px-4 py-4 text-black">
      <div 
        className="inline-block cursor-pointer p-2 -ml-2 mb-8" 
        onClick={handleBack}
      >
        <FiArrowLeft className="text-2xl"/>
      </div>
      <h1 className="text-4xl font-bold mb-4 font-manuale">Verify account</h1>
      <p className='mb-8'>We have sent verification code to EMAIL_TO_BE_PLACED_HERE Please check and input the verification code.</p>
      <input type="text" placeholder="Verification code" className="border p-2 mb-4 w-full" />
      <button onClick={handleNext} className="bg-blue-700 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default VerificationCode;
