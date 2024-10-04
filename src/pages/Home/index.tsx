import React from "react";
import bannerImage from "../../assets/img/jp_1-min.png";
import Testimoni from "./Testimoni";
import Features from "./Features";
import DesignedForYou from "./DesignedForYou";
import SignUp from "./SignUp";

const Home: React.FC = () => {
  return (
    <main>
      <div className="bg-blue-100 py-12 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left-hand side: Text content */}
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 text-black px-4">
              <h1 className="text-6xl font-bold mb-6">Move with confidence.</h1>
              
              <p className="text-lg font-bold mb-4">
              Embark on your new adventure and be fully prepared for a new life in Japan
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={bannerImage}
                alt="Platform Preview"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <div className=" -mt-24"> {/* Added negative margin-top here */}
          <DesignedForYou />

          <div className="flex flex-col w-full my-2" id="features">
            <Features />
          </div>
          <div className="flex flex-col w-full my-2" id="testimoni">
            <Testimoni />
          </div>
        </div>
        <SignUp scrollThreshold={300} />
      </div>
    </main>
  );
};

export default Home;
