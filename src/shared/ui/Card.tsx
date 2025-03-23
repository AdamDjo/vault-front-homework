type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => (
  <section className={` ${className}`}>{children}</section>
);
export default Card;
