import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimoni.css';

interface TestimonialProps {
  contentKey: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ contentKey, image }) => {
  const { t } = useTranslation();
  return (
    <div className="px-4">
      <div className="bg-white-500 rounded-lg border border-gray-100 py-4 h-64 flex flex-col items-center justify-between">
        <div className="w-full mb-4">
          <img src={image} alt={t('testimonialImage')} className="w-full h-auto object-cover" />
        </div>
        <p className="text-gray-700 text-center flex-grow flex items-center">{t(contentKey)}</p>
      </div>
    </div>
  );
};

const Testimoni: React.FC = () => {
  const { t } = useTranslation();
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
      contentKey: "reasonJapan1",
      image: "https://via.placeholder.com/150x84"
    },
    {
      contentKey: "reasonJapan2",
      image: "https://via.placeholder.com/150x84"
    },
    {
      contentKey: "reasonJapan3",
      image: "https://via.placeholder.com/150x84"
    },
    {
      contentKey: "reasonJapan4",
      image: "https://via.placeholder.com/150x84"
    }
  ];

  return (
    <div className="py-12 px-10 text-black">
      <h2 className="text-3xl font-bold text-center mb-4 font-manuale">
        {t('reasonsToLiveInJapan')}
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
