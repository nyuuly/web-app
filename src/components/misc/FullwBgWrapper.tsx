import React, { ReactNode } from 'react';

interface GradientWrapperProps {
  bgClassName?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

const FullwBgWrapper: React.FC<GradientWrapperProps> = ({ bgClassName = '', style, children }) => {
  return (
    <div
      className={`text-black ${bgClassName}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FullwBgWrapper;
