import React from "react";
import { useTranslation } from "react-i18next";
import { FiFileText, FiList } from "react-icons/fi";

const WelcomeSignUp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-5xl font-bold mb-4 text-blue-500 md:mt-8">
        Welcome to nyuuly.
      </h1>
      <p className="text-lg pr-12 md:pr-36 font-semibold">
        It's easy—opening your account takes as little as 3 minutes.
      </p>
      <div className="flex flex-row bg-white bg-opacity-20 p-4 md:p-8 rounded-xl mt-8 md:mt-12">
        <div className="w-full w-1/2 pr-4 md:pr-8">
          <FiList className="text-2xl" />
          <p className="text-2xl font-semibold my-4">Personalised task list</p>
          <p>Get started on what is the most important</p>
        </div>
        <div className="w-full w-1/2 pl-2 md:pl-8 md:border-l md:border-white">
          <FiFileText className="text-2xl" />
          <p className="text-2xl font-semibold my-4">Handpicked resources</p>
          <p>Information hub customised based on your move</p>
        </div>
      </div>
    </>
  );
};

export default WelcomeSignUp;
