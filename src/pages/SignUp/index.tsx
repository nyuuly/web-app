import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import EmailInput from "./EmailInput";
import VerificationCode from "./VerificationCode";
import FullwBgWrapper from "../../components/misc/FullwBgWrapper";
import WelcomeSignUp from "./WelcomeSignUp";
import axiosInstance from "../../api/axiosConfig";
import { API_ENDPOINTS } from "../../api/endpoints";
import { useAuth } from "../../contexts/AuthContext";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailSubmit = async (submittedEmail: string) => {
    setEmail(submittedEmail);
    //send OTP
    const response = await axiosInstance.post(API_ENDPOINTS.SEND_OPT, {
      email: submittedEmail,
    });
    console.log(`Send OTP while registration - response:`);
    console.log(response);
    navigate("verification");
  };

  const handleVerification = async (code: string) => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.REGISTER, {
        email,
        verificationCode: code,
      });
      console.log("Registration successful:", response.data);

      if (response.data.access_token && response.data.user) {
        login(response.data.access_token, response.data.user);
        navigate("/");
      } else {
        console.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Sign in with Google");
  };

  return (
    <main>
      <FullwBgWrapper
        bgClassName="pb-12"
        style={{
          background:
            "linear-gradient(180deg, #051C58 0%, #3D4EDD 51%, #FFA555 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-4 md:pr-8 mb-4 md:mb-0 text-white">
              <WelcomeSignUp />
            </div>

            {/* Right column with routes */}
            <div className="w-full md:w-1/2 px-4 md:pl-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Routes>
                  <Route
                    index
                    element={
                      <EmailInput
                        onNext={handleEmailSubmit}
                        onGoogleSignIn={handleGoogleSignIn}
                      />
                    }
                  />
                  <Route
                    path="verification"
                    element={
                      <VerificationCode
                        email={email}
                        onVerify={handleVerification}
                      />
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </FullwBgWrapper>
    </main>
  );
};

export default SignUp;
