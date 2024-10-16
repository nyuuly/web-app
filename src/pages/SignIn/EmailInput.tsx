import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../contexts/AuthContext";
import axiosInstance from "../../api/axiosConfig";
import { API_ENDPOINTS } from "../../api/endpoints";

const EmailInput: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, { email });

      if (response.data.access_token) {
        login(response.data.access_token);
        // Navigate to home page or dashboard
        window.location.href = "/";
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 401) {
        setErrorMessage(
          "Email not found. Please check and try again OR Register"
        );
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Sign in with Google");
  };

  return (
    <div className="container mx-auto px-4 py-4 text-black">
      <h1 className="text-4xl font-bold mb-4 font-manuale">Sign In</h1>
      <label>Email Address</label>
      <input
        type="email"
        placeholder="Enter your email address"
        className="border p-2 mb-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
      )}
      <button
        onClick={handleSignIn}
        className="bg-orange-400 text-black w-full font-bold px-4 py-2 rounded hover:bg-orange-500 transition-colors"
      >
        Sign in
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
