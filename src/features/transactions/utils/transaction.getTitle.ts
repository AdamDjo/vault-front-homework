import { Transaction } from '@/types/transaction.types';

export const getTransactionTitle = (type: Transaction['type']): string => {
  switch (type) {
    case 'ACCOUNT_CREATED':
      return 'Account Created';
    case 'TRANSACTION_RECEIVED':
      return 'Received';
    case 'TRANSACTION_SENT':
      return 'Sent';
    default:
      return 'Unknown';
  }
};
