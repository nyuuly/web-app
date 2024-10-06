import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface SignUpProps {
  scrollThreshold: number;
}

const SignUp: React.FC<SignUpProps> = ({ scrollThreshold }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [hasReachedTop, setHasReachedTop] = useState(true);
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      setHasReachedTop(true);
      setIsClosed(false);
    } else if (currentScrollY > scrollThreshold && hasReachedTop && !isClosed) {
      setIsVisible(true);
      controls.start({ opacity: 1, y: 0 });
      setHasReachedTop(false);
    } else if (currentScrollY <= scrollThreshold && isVisible) {
      setIsVisible(false);
      controls.start({ opacity: 0, y: 100 });
    }
  }, [scrollThreshold, isVisible, isClosed, hasReachedTop, controls]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    controls.start({ opacity: 0, y: 100 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 w-full p-6"
      style={{
        background: 'linear-gradient(202.89deg, #3E82F7 11.42%, #C8EF0E 165.97%)',
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
        <button 
          onClick={handleClose}
          className="absolute top-0 right-0 text-white hover:text-orange-200 text-xl font-bold -mt-6 -mr-6"
        >
          &times;
        </button>
        <div className="mb-2 md:mb-0 text-white-500">
          <h1 className="text-2xl font-bold mb-2">Sign up today</h1>
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
