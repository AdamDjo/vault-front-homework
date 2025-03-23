import React from 'react';
type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

const Box = ({ children, className = '' }: BoxProps) => (
  <div className={`${className}`}>{children}</div>
);
export default Box;
