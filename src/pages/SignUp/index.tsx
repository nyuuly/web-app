import React from 'react';
import { Outlet } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <div className="signup-container text-black">
      <Outlet />
    </div>
  );
};

export default SignUp;
