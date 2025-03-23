import { Transaction } from '@/types/transaction.types';
import { ArrowDown, ArrowUp, Plus } from 'lucide-react';

export const getOverlayIcon = (type: Transaction['type']) => {
  switch (type) {
    case 'TRANSACTION_RECEIVED':
      return {
        icon: <ArrowDown className="h-4 w-4 text-white" />,
        color: 'bg-[#47883A]',
      };
    case 'TRANSACTION_SENT':
      return {
        icon: <ArrowUp className="h-4 w-4 text-white" />,
        color: 'bg-[#949494]',
      };
    case 'ACCOUNT_CREATED':
      return {
        icon: <Plus className="h-4 w-4 text-white" />,
        color: 'bg-[#47883A]',
      };
    default:
      return {
        icon: null,
        color: '',
      };
  }
};
