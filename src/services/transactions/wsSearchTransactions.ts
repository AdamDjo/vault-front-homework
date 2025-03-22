import { Transaction } from '@/types/transaction.types';
import { api } from '@services/global/http-common';

export const wsSearchTransactions = async (
  q: string
): Promise<Transaction[]> => {
  const { data } = await api.get(`/search?q=${q}`);
  return data;
};
