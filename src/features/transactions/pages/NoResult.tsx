import Box from '@/shared/ui/Box';

const NoResult = () => {
  return (
    <Box className="flex flex-col items-center h-[400px] justify-center gap-4  text-center space-y-2">
      <img
        src="/images/no-result.svg"
        alt="No result found"
        className="max-w-32 max-h-32"
      />
      <h2 className="text-base font-semibold text-black">No result found...</h2>
    </Box>
  );
};

export default NoResult;
