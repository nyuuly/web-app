import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Features.css';

interface FeatureProps {
  name: string;
  comingSoon?: boolean;
  backgroundColor: string;
}

const Feature: React.FC<FeatureProps> = ({ name, comingSoon, backgroundColor }) => (
  <div className="feature-wrapper">
    <div className={`feature-card rounded-lg shadow-md p-6 flex flex-col justify-center ${backgroundColor}`}>
      {comingSoon && (
        <p className="text-xs text-gray-600 mb-2">coming soon</p>
      )}
      <h3 className="text-xl font-semibold text-center">{name}</h3>
    </div>
  </div>
);

const Features: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const features = [
    {
      name: "Nyuuly Tasklist",
      backgroundColor: "bg-blue-100",
    },
    {
      name: "Information Hub",
      backgroundColor: "bg-green-100",
    },
    {
      name: "Mobile SIM",
      comingSoon: true,
      backgroundColor: "bg-orange-100",
    },
    {
      name: "Housing",
      comingSoon: true,
      backgroundColor: "bg-purple-100",
    },
    {
      name: "Language Learning",
      backgroundColor: "bg-red-100",
    },
    {
      name: "Job Search",
      backgroundColor: "bg-yellow-100",
    },
    {
      name: "Cultural Tips",
      backgroundColor: "bg-indigo-100",
    },
  ];

  return (
    <div className="py-12 px-4 lg:px-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
      <div className="features-carousel">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Features;
