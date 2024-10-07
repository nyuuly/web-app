import React from "react";
import mapIcon from "../../assets/icons/map_icon.png";
import ScrollAnimationWrapper from '../../components/misc/ScrollAnimationWrapper';

const Mission: React.FC = () => {
  return (
    <ScrollAnimationWrapper>
      <div className="container mx-auto px-4 py-8 text-black">
        <div className="flex flex-col md:flex-row gap-8 mb-4">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to empower individuals with the tools and knowledge
              they need for a seamless transition to life in Japan. We strive to
              simplify the complexities of relocation, ensuring that every step of
              your journey is supported and stress-free.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg">
              <img
                src="https://via.placeholder.com/150x84"
                alt="Placeholder 2"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
        <ScrollAnimationWrapper>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-blue-100 p-6 rounded-lg">
                <img
                  src={mapIcon}
                  alt=""
                  className="w-[33px] h-[33px] mb-2"
                />
                <h3 className="text-xl font-semibold mb-2">Value {item}</h3>
                <p>
                  Description of Value {item}
                </p>
              </div>
            ))}
          </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
};

export default Mission;
