const NoResult = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center space-y-2">
      <img
        src="/images/no-result.svg"
        alt="No result found"
        className="w-32 h-32"
      />
      <h2 className="text-base font-semibold text-black">No result found...</h2>
    </div>
  );
};

export default NoResult;
