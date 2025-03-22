type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className = '' }: SectionProps) => (
  <section className={`w-full ${className}`}>{children}</section>
);
export default Section;
