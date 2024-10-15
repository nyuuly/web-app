import React from "react";
import { useTranslation } from "react-i18next";

interface SignUpProps {
  className?: string;
}

const SignUp: React.FC<SignUpProps> = ({ className = "" }) => {
  const { t } = useTranslation();

  return (
    <div className={`bg-gray-700 text-white text-center p-8 md:p-12 ${className}`}>
      <div className="mx-auto">
        <h2 className="text-4xl font-semibold mb-8">
          Join us as you kickstart your move
        </h2>
        <button className="bg-blue-600 text-white text-lg font-semibold py-3 px-12 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
          Register Nyuuly today
        </button>
      </div>
    </div>
  );
};

export default SignUp;
