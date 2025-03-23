import React from 'react';
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => (
  <div className={` ${className}`}>{children}</div>
);
export default Card;
