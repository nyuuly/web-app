// import { style } from 'framer-motion/client';
import React from 'react';

interface SignUpProps {
  className?: string;
}

const SignUp: React.FC<SignUpProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-orange-400 to-blue-700 p-6 ${className}`} style={{background: 'linear-gradient(202.89deg, #3E82F7 11.42%, #C8EF0E 165.97%)'}}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-white">
          <h2 className="text-2xl font-bold mb-2">Sign up today</h2>
          <p>Get started with our tasklist and personalised reminders for you</p>
        </div>
        <button className="bg-orange-400 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-orange-100 transition-colors">
          Register now
        </button>
      </div>
    </div>
  );
};

export default SignUp;