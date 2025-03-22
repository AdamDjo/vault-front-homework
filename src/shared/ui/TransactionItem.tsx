// src/features/transactions/components/TransactionItem.tsx

import { ArrowDownLeft, Bitcoin } from 'lucide-react';

const TransactionItem = () => {
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
              background: 'linear-gradient(135deg, #F7931A 0%, #F7931A 100%)',
            }}
          >
            <Bitcoin className="text-white w-4 h-4" />
          </div>

          {/* Overlay icon */}
          <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-green-600 flex items-center justify-center border border-white">
            <ArrowDownLeft className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-col gap-1  w-full">
        <div className="flex justify-between">
          <span className="text-base font-semibold text-black">Received</span>

          <span className="text-base font-semibold text-black">55 BTC</span>
        </div>
        <div className="">
          <span className="text-sm font-medium text-[#6A6A6A]">
            From bc1qymz7...vgk3kvtl
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
