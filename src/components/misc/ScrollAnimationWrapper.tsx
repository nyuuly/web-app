'use client';

import React, { useRef, useEffect, ReactNode } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ children, className = '' }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;