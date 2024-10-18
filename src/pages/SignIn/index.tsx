import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axiosInstance from "../../api/axiosConfig";
import { API_ENDPOINTS } from "../../api/endpoints";
import EmailInput from "./EmailInput";
import FullwBgWrapper from "../../components/misc/FullwBgWrapper";
import WelcomeSignIn from "./WelcomeSignIn";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = async () => {
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, { email });

      if (response.data.access_token && response.data.user) {
        login(response.data.access_token, response.data.user);
        navigate("/");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    } catch (error: any) {
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
              <WelcomeSignIn />
            </div>
            <div className="w-full md:w-1/2 px-4 md:pl-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <EmailInput
                  email={email}
                  setEmail={setEmail}
                  errorMessage={errorMessage}
                  onSignIn={handleSignIn}
                  onGoogleSignIn={handleGoogleSignIn}
                />
              </div>
            </div>
          </div>
        </div>
      </FullwBgWrapper>
    </main>
  );
};

export default SignIn;
