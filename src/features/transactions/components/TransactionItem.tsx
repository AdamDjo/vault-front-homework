import { TransactionUIProps } from '@/features/transactions/types/TransactionUI.types';
import Card from '@/shared/ui/Card';
import clsx from 'clsx';

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
    <div
      className={clsx(
        'flex w-full p-3 relative rounded-xl gap-3 border border-[#E8E8E8] shadow-[0_2px_6px_rgba(0,0,0,0.03)] items-center '
      )}
    >
      <div
        className="absolute inset-0 rounded-xl z-0"
        style={{
          background: `linear-gradient(160deg, ${gradient.from}1A 0%, ${gradient.from}00 40%)`, // light opacity here!
        }}
      ></div>
      {/* Left section */}
      <div className="flex  items-center relative z-1">
        {/* Crypto Icon */}
        <div className="relative">
          {/* Circle gradient */}
          <div
            className="h-12 w-12 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
            }}
          >
            <CryptoIcon className="text-white w-7 h-7" />
          </div>

          {/* Overlay icon */}
          <div
            className={`absolute -top-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center border border-white ${overlayColor} bg-white`}
          >
            <div
              className={`absolute -top-0 -right-0 h-5 w-5 rounded-full flex items-center justify-center border border-white  ${overlayColor}`}
            >
              {overlayIcon}
            </div>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-col gap-1  w-full z-2">
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
