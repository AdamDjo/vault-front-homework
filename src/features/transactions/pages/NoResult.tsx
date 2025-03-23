import Box from '@/shared/ui/Box';
import NotFoundImage from '@/assets/images/notfound.png';

const NoResult = () => {
  return (
    <Box className="flex flex-col h-[380px] items-center flex-1 justify-center gap-4  text-center ">
      <img
        src={NotFoundImage}
        alt="No result found"
        className="max-w-70 max-h-70"
      />
      <h2 className="text-base font-semibold text-black">No result found...</h2>
    </Box>
  );
};

export default NoResult;
