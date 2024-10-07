import React from "react";
import Intro from "./Intro";
import Mission from "./Mission";
import Team from "./Team";

const AboutUs: React.FC = () => {
  return (
    <main>
      <div className="container mx-auto px-4 text-black">
        <Intro />
      </div>
      <div className="bg-gray-200 py-12 pb-24">
        <Mission />
      </div>
      <div className="container mx-auto px-4 text-black">
        <Team />
      </div>
    </main>
  );
};

export default AboutUs;
