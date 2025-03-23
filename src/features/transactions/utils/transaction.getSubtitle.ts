import { Transaction } from '@/types/transaction.types';
import { truncateAddress } from '@features/transactions/utils/transaction.formatters';

export const getTransactionSubtitle = (transaction: Transaction): string => {
  const { type, data } = transaction;
  switch (type) {
    case 'ACCOUNT_CREATED':
      return data.name ?? 'New Account';
    case 'TRANSACTION_RECEIVED':
      return `From ${truncateAddress(data.from!)}`;
    case 'TRANSACTION_SENT':
      return `To ${truncateAddress(data.to!)}`;
    default:
      return '';
  }
};
