import React from "react";
import { FiArrowRight } from "react-icons/fi";
import bicycleImage from "../../../assets/img/bicycle.png";
import FullwBgWrapper from "../../../components/misc/FullwBgWrapper";

interface TellUsMoreProps {
  onOpen: () => void;
}

const TellUsMore: React.FC<TellUsMoreProps> = ({ onOpen }) => {
  return (
    <FullwBgWrapper bgClassName="pb-24">
    <div className="container mx-auto max-w-7xl px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Welcome to Nyuuly</h1>
    <div
      onClick={onOpen}
      className="w-full mt-4 bg-blue-500 text-black p-8 rounded-lg cursor-pointer"
      style={{
        background: "linear-gradient(90deg, #F7F09D 0%, #AAC7FF 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/6 mb-4 md:mb-0">
          <img
            src={bicycleImage}
            alt="Tell us more about your move to Japan"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-3/5 mb-4 md:mb-0 text-center md:text-left">
          <span className="block mb-2">
            Answer a few questions for a more personalised experience
          </span>
          <h2 className="font-bold text-2xl">
            Tell us more about your move to Japan
          </h2>
        </div>
        <div className="w-full md:w-1/5 flex items-center justify-center md:justify-end">
          <span className="mr-2">GET STARTED</span>
          <FiArrowRight size={24} />
        </div>
      </div>
    </div>
    </div>
    </FullwBgWrapper>
  );
};

export default TellUsMore;
