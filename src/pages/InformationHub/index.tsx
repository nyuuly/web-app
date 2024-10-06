import React from "react";
import infoBannerImage from "../../assets/img/banner_2-min.png";

const InformationHub: React.FC = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${infoBannerImage})`,
          aspectRatio: "1440 / 293",
        }}
      >
        <div className="container mx-auto px-4 pb-24">
        <div className="flex flex-col md:flex-row gap-8 pt-4">
          {/* Left 1/3 with round div */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-blue-600 rounded-full w-64 h-64 flex items-center justify-center p-6 -mt-20">
              <p className="text-center text-white font-bold text-2xl">
                Your one-stop info hub for a stress-free move!
              </p>
            </div>
          </div>
          {/* Right 2/3 placeholder */}
          <div className="w-full md:w-2/3 bg-gray-100 p-8 rounded-lg">
            <p className="text-xl">Placeholder for additional content</p>
          </div>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default InformationHub;
