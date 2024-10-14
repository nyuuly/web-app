import React from "react";
import { Routes, Route } from "react-router-dom";
import EmailInput from "./EmailInput";
import VerificationCode from "./VerificationCode";
import Questions from "./Questions";
import FullwBgWrapper from "../../components/misc/FullwBgWrapper";
import WelcomeSignUp from "./WelcomeSignUp";

const SignUp: React.FC = () => {
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
                  <Route index element={<EmailInput />} />
                  <Route path="verification" element={<VerificationCode />} />
                  <Route path="questions" element={<Questions />} />
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
