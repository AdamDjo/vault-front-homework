import { useState } from 'react';
import { useFetchTransactions } from '@/hooks/useFetchTransactions';
import { useDebounce } from '@/hooks/useDebounce';
import Box from '@/shared/ui/Box';
import TransactionHeader from '@/features/transactions/components/TransactionHeader';
import TransactionList from './features/transactions/components/TransactionList';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedText = useDebounce(searchText, 500);
  const { isLoading, results } = useFetchTransactions(debouncedText);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Box className="p-6">
        <TransactionHeader
          searchText={searchText}
          onSearchChange={setSearchText}
          isLoading={isLoading}
        />

        {isLoading ? (
          <div>{'Loading...'}</div>
        ) : results ? (
          <TransactionList transactions={results} />
        ) : null}
      </Box>
    </div>
  );
};

export default App;
