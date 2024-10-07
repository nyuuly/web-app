import React from 'react';
import ScrollAnimationWrapper from '../../components/misc/ScrollAnimationWrapper';

const Intro: React.FC = () => {
  return (
      <div className="container mx-auto py-12 pb-24 -mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hidden md:flex bg-gray-300 h-64 items-center justify-center">
            <img src="https://via.placeholder.com/150x84" alt="Placeholder 1" className="w-full h-full rounded-lg object-cover" />
          </div>

          <div className="hidden md:flex bg-gray-300 h-64 items-center justify-center">
            <img src="https://via.placeholder.com/150x84" alt="Placeholder 2" className="w-full h-full rounded-lg object-cover" />
          </div>
          <ScrollAnimationWrapper>
          <div className="flex flex-col justify-center pt-24 md:pt-0">
            <h2 className="text-3xl font-bold mb-4">We are Nyuuly</h2>
            <p className="text-lg">
              At Nyuuly, we believe that a smooth transition to Japan unlocks happiness and opportunity. Our mission is to provide the tools and support you need for an effortless move. Join us in creating a fulfilling life in Japan!
            </p>
          </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
          <div className="bg-gray-300 h-64 flex items-center justify-center">
            <img src="https://via.placeholder.com/150x84" alt="Placeholder 3" className="w-full h-full rounded-lg object-cover" />
          </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
  );
};

export default Intro;
