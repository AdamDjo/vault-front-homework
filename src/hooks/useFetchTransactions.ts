import { useEffect, useState } from 'react';
import { Transaction } from '@/types/transaction.types';
import { wsSearchTransactions } from '@/services/transactions/wsSearchTransactions';

export const useFetchTransactions = (query: string) => {
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Transaction[]>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await wsSearchTransactions(query);
        setResults(data);
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setResults([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { isLoading, results, error };
};
