import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimoni.css';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, image }) => (
  <div className="px-4">
    <div className="bg-white-500 rounded-lg shadow-md p-6">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-center mb-4">{role}</p>
      <p className="text-gray-700 text-center">{content}</p>
    </div>
  </div>
);

const Testimoni: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      content: "Arrive confidentally in Japan",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Jane Smith",
      role: "Designer, CreativeCo",
      content: "Get your plan in order, all in one place",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Mike Johnson",
      role: "Developer, WebSolutions",
      content: "Always on integrator for all your needs",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Sarah Williams",
      role: "Marketing Manager, BrandBoost",
      content: "This tool has significantly improved our team's productivity and collaboration.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="py-12 px-10">
       <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Designed with you in mind
          </h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimoni;
