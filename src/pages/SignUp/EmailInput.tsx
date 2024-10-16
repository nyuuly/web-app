import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Import Google icon

interface EmailInputProps {
  onNext: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  useEffect(() => {
    if (email) {
      setIsValid(validateEmail(email));
    } else {
      setIsValid(true); // Reset validation when email is empty
    }
  }, [email]);

  const handleNext = () => {
    if (isValid && email) {
      onNext(email);
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Sign in with Google");
  };

  return (
    <div className="container mx-auto px-4 py-4 text-black">
      <h1 className="text-4xl font-bold mb-4 font-manuale">Register</h1>
      <label>Email Address</label>
      <input
        type="email"
        placeholder="Enter your email address"
        className={`border p-2 mb-2 w-full ${!isValid ? 'border-red-500' : ''}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isValid && (
        <p className="text-red-500 text-sm mb-2 self-start">Please enter a valid email address</p>
      )}
      <button
        onClick={handleNext}
        className={`w-full font-bold px-4 py-2 rounded transition-colors ${
          isValid && email
            ? 'bg-orange-400 text-black hover:bg-orange-400'
            : 'bg-orange-100 cursor-not-allowed'
        }`}
        disabled={!isValid || !email}
      >
        Register
      </button>

      {/* Divider with OR */}
      <div className="flex items-center my-4 md:my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Sign in with Google option */}
      <button
        onClick={handleGoogleSignIn}
        className="w-full border border-gray-300 text-black font-bold px-4 py-2 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <FcGoogle className="mr-2 text-xl" /> Sign in with Google
      </button>

      {/* Login option */}
      <div className="text-center mt-12">
        Already have an account?
        <Link
          to="/signin"
          className="text-blue-600 font-semibold ml-1 hover:underline"
        >
          Sign in
        </Link>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-300 my-4 md:mt-24 -mx-8"></div>

      {/* Terms and conditions */}
      <p className="text-sm text-gray-600 text-center md:px-12">
        By continuing you agree to our{" "}
        <Link to="/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/terms-of-use" className="text-blue-600 hover:underline">
          Terms of Use
        </Link>{" "}
        of this platform.
      </p>
    </div>
  );
};

export default EmailInput;
