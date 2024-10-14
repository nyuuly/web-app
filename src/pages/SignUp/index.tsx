import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmailInput from './EmailInput';
import VerificationCode from './VerificationCode';
import Questions from './Questions';

const SignUp: React.FC = () => {
  return (
    <div className="signup-container text-black">
      <Routes>
        <Route index element={<EmailInput />} />
        <Route path="verification" element={<VerificationCode />} />
        <Route path="questions" element={<Questions />} />
      </Routes>
    </div>
  );
};

export default SignUp;
