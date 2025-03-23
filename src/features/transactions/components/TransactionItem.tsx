import { TransactionUIProps } from '@/features/transactions/types/TransactionUI.types';

type Props = TransactionUIProps;

const TransactionItem = ({
  CryptoIcon,
  gradient,
  title,
  subtitle,
  amount,
  overlayIcon,
  overlayColor,
}: Props) => {
  return (
    <div className="flex   w-full p-3 rounded-xl  gap-1 border-1 border-[#E8E8E8]">
      {/* Left section */}
      <div className="flex  items-center ">
        {/* Crypto Icon */}
        <div className="relative">
          {/* Circle gradient */}
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center"
            style={{
              background: gradient,
            }}
          >
            <CryptoIcon className="text-white w-4 h-4" />
          </div>

          {/* Overlay icon */}
          <div
            className={`absolute -top-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center border border-white ${overlayColor}`}
          >
            {overlayIcon}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-col gap-1  w-full">
        <div className="flex justify-between">
          <span className="text-base font-semibold text-black">{title}</span>
          {amount && (
            <span className="text-base font-semibold text-black">{amount}</span>
          )}
        </div>
        <div>
          <span className="text-sm font-medium text-[#6A6A6A]">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
