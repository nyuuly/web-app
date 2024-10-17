import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import EmailInputBox from "../../components/EmailInputBox";

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  errorMessage: string;
  onSignIn: () => void;
  onGoogleSignIn: () => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
  email,
  setEmail,
  errorMessage,
  onSignIn,
  onGoogleSignIn
}) => {
  return (
    <div className="container mx-auto px-4 py-4 text-black">
      <h1 className="text-4xl font-bold mb-4 font-manuale">Sign In</h1>
      <EmailInputBox
        value={email}
        onChange={setEmail}
        onSubmit={onSignIn}
        placeholder="Enter your email address"
        label="Email Address"
        buttonText="Sign in"
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
      )}

      {/* Divider with OR */}
      <div className="flex items-center my-4 md:my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-600">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Sign in with Google option */}
      <button
        onClick={onGoogleSignIn}
        className="w-full border border-gray-300 text-black font-bold px-4 py-2 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
      >
        <FcGoogle className="mr-2 text-xl" /> Sign in with Google
      </button>

      {/* Register option */}
      <div className="text-center mt-12">
        Don't have an account?
        <Link
          to="/signup"
          className="text-blue-600 font-semibold ml-1 hover:underline"
        >
          Register Now
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
