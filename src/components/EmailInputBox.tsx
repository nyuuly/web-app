import React, { useState } from 'react';

interface EmailInputBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  label: string;
  buttonText: string;
}

const EmailInputBox: React.FC<EmailInputBoxProps> = ({ 
  value, 
  onChange, 
  onSubmit,
  placeholder = "Enter your email address",
  label,
  buttonText
}) => {
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (validateEmail(value)) {
      setIsValid(true);
      onSubmit();
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type="email"
        placeholder={placeholder}
        className={`border p-2 mb-2 w-full ${!isValid ? 'border-red-500' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {!isValid && (
        <p className="text-red-500 text-sm mb-2">Please enter a valid email address</p>
      )}
      <button
        onClick={handleSubmit}
        className={`w-full font-bold px-4 py-2 rounded transition-colors ${
          value
            ? 'bg-orange-400 text-black hover:bg-orange-400'
            : 'bg-orange-400 cursor-not-allowed'
        }`}
        disabled={!value}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default EmailInputBox;
