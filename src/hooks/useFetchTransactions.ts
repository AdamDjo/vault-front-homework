import { useEffect, useState } from 'react';
import { Transaction } from '@/types/transaction.types';
import { wsSearchTransactions } from '@/services/transactions/wsSearchTransactions';

export const useFetchTransactions = (query: string) => {
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Transaction[]>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await wsSearchTransactions(query);
        setResults(data);
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    } else {
      setResults(null);
    }
  }, [query]);

  return { isLoading, results };
};
