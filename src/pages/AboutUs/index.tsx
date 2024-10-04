import React from 'react';
import taskBannerImage from '../../assets/img/banner_task-min.png';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="w-full">
        <img
          src={taskBannerImage}
          alt="Task Banner"
          className="w-full h-auto"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      {/* Add more content for your About Us page here */}
    </div>
  );
};

export default AboutUs;