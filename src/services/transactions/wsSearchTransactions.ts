import { Transaction } from '@/types/transaction.types';
import { api } from '@services/global/http-common';

export const wsSearchTransactions = async (
  q?: string
): Promise<Transaction[]> => {
  const url =
    q && q.trim() !== '' ? `/search?q=${encodeURIComponent(q)}` : `/search`; // Default to all transactions

  const { data } = await api.get(url);
  return data;
};
