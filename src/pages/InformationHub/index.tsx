import React from 'react';
import infoBannerImage from '../../assets/img/banner_info-min.png';

const InformationHub: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="w-full">
        <img
          src={infoBannerImage}
          alt="Information Hub Banner"
          className="w-full h-auto"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 mt-8">Information Hub</h1>
      <p>Find all the important information you need here.</p>
    </div>
  );
};

export default InformationHub;