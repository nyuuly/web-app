import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SignUpProps {
  scrollThreshold: number;
}

const SignUp: React.FC<SignUpProps> = ({ scrollThreshold }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold && !isVisible) {
        setIsVisible(true);
        controls.start({ opacity: 1, y: 0 });
      } else if (window.scrollY <= scrollThreshold && isVisible) {
        setIsVisible(false);
        controls.start({ opacity: 0, y: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold, isVisible, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 w-full p-2"
      style={{
        background: 'linear-gradient(202.89deg, #3E82F7 11.42%, #C8EF0E 165.97%)',
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-2 md:mb-0 text-white-500">
          <h1 className="text-xl font-bold mb-2">Sign up today</h1>
          <p>Get started with our tasklist and personalised reminders for you</p>
        </div>
        <button className="bg-orange-400 px-6 py-2 rounded-full text-lg font-semibold hover:bg-orange-500 transition-colors">
          Register now
        </button>
      </div>
    </motion.div>
  );
};

export default SignUp;
