import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import OtpInput from "react-otp-input";

interface VerificationCodeProps {
  email: string;
  onVerify: (code: string) => void;
}

const VerificationCode: React.FC<VerificationCodeProps> = ({ email, onVerify }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleNext = () => {
    if (otp.length === 6) {
      onVerify(otp);
    } else {
      alert("Please enter a valid 6-digit code");
    }
  };

  const handleBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  const handleResendCode = () => {
    // Implement resend code logic here
    console.log("Resending verification code");
    // You might want to add some visual feedback or disable the button temporarily
  };

  const handleOtpChange = (value: string) => {
    // Only allow numeric input
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 text-black">
      <div
        className="inline-block cursor-pointer p-2 -ml-2 mb-8"
        onClick={handleBack}
      >
        <FiArrowLeft className="text-2xl" />
      </div>
      <h1 className="text-4xl font-bold mb-4 font-manuale">Verify account</h1>
      <p className="mb-8">
        We have sent a verification code to {email}. Please
        check and input the verification code.
      </p>
      <div className="max-w-sm">
        <OtpInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              style={{ width: "44px", height: "44px" }}
              className="text-center border rounded-md text-xl font-bold"
              type="tel"
            />
          )}
          containerStyle="flex justify-between mb-8"
          inputType="tel"
        />
      </div>
      <div className="mb-4">
        {/* TODO: Prevent resend for 1minute once it's clicked */}
        Haven't received code?
        <button
          onClick={handleResendCode}
          className="text-blue-600 hover:text-blue-800 underline ml-2"
        >
          Resend code
        </button>
      </div>
      <button
        onClick={handleNext}
        className="bg-orange-400 font-bold px-4 py-2 rounded w-full"
      >
        Verify email address
      </button>
    </div>
  );
};

export default VerificationCode;
