import React from "react";
import bannerImage from '../../assets/img/banner_landing-min.png';
import Testimoni from './Testimoni';
import Features from './Features';
import DesignedForYou from './DesignedForYou';
import SignUp from './SignUp';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-24">
      <main className="shadow-xl bg-white-500">
        <div className="flex flex-col items-center">
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-auto mb-6"
          />
        </div>
        
        <DesignedForYou />

        <div className="flex flex-col w-full my-2" id="features">
          <Features />
        </div>
        <div className="flex flex-col w-full my-2" id="testimoni">
          <Testimoni />
        </div>
      </main>
      <SignUp scrollThreshold={300} />
    </div>
  );
};

export default Home;
