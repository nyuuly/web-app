import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SignUp from '../../../components/SignUp';

interface SignUpProps {
  scrollThreshold: number;
}

const AnimatedSignUp: React.FC<SignUpProps> = ({ scrollThreshold }) => {
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
      className="fixed bottom-0 left-0 right-0 w-full"
    >
      <div className="relative">
        <button 
          onClick={handleClose}
          className="absolute top-10 right-0 text-white hover:text-orange-200 text-xl font-bold p-2 -mt-8"
        >
          &times;
        </button>
        <SignUp />
      </div>
    </motion.div>
  );
};

export default AnimatedSignUp;
