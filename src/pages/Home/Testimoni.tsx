import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimoni.css';

interface TestimonialProps {
  content: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, image }) => (
  <div className="px-4">
    <div className="bg-white-500 rounded-lg shadow-md py-4 h-64 flex flex-col items-center justify-between">
      <div className="w-full mb-4"> {/* Added a wrapper div */}
        <img src={image} alt="Testimonial" className="w-full h-auto object-cover" />
      </div>
      <p className="text-gray-700 text-center flex-grow flex items-center">{content}</p>
    </div>
  </div>
);

const Testimoni: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
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
      content: "Arrive confidently in Japan",
      image: "https://via.placeholder.com/150x84"
    },
    {
      content: "Get your plan in order, all in one place",
      image: "https://via.placeholder.com/150x84"
    },
    {
      content: "Always on integrator for all your needs",
      image: "https://via.placeholder.com/150x84"
    },
    {
      content: "This tool has significantly improved our team's productivity and collaboration.",
      image: "https://via.placeholder.com/150x84"
    }
  ];

  return (
    <div className="py-12 px-10 text-black">
      <h2 className="text-3xl font-bold text-center mb-4">
        Reasons to live in Japan
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimoni;
