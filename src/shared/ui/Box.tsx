type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

const Box = ({ children, className = '' }: BoxProps) => (
  <div
    className={`rounded-3xl  sm:w-lg bg-inherit shadow p-4 min-h-[440px] max-w-[440px]  ${className}`}
  >
    {children}
  </div>
);
export default Box;
