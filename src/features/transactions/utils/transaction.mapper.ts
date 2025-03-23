import { Transaction } from '@/types/transaction.types';
import {
  getTransactionTitle,
  getTransactionSubtitle,
} from '@/features/transactions/utils';
import { TransactionUIProps } from '@/features/transactions/types/TransactionUI.types';

export const mapTransactionToUI = (
  transaction: Transaction
): TransactionUIProps => {
  return {
    title: getTransactionTitle(transaction.type),
    subtitle: getTransactionSubtitle(transaction),
  };
};
