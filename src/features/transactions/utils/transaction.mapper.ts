import { Transaction } from '@/types/transaction.types';
import {
  getTransactionTitle,
  getCryptoIcon,
  getTransactionSubtitle,
  getCryptoGradient,
} from '@/features/transactions/utils';
import { TransactionUIProps } from '@/features/transactions/types/TransactionUI.types';
import { getOverlayIcon } from './transaction.getOverlayIcon';

export const mapTransactionToUI = (
  transaction: Transaction
): TransactionUIProps => {
  const { data } = transaction;
  const overlay = getOverlayIcon(transaction.type);

  return {
    title: getTransactionTitle(transaction.type),
    subtitle: getTransactionSubtitle(transaction),
    amount: data.amount && data.unit ? `${data.amount} ${data.unit}` : null,
    CryptoIcon: getCryptoIcon(data.unit),
    gradient: getCryptoGradient(data.unit),
    overlayIcon: overlay.icon,
    overlayColor: overlay.color,
  };
};
