import { useState } from 'react';
import { useFetchTransactions } from '@/hooks/useFetchTransactions';
import { useDebounce } from '@/hooks/useDebounce';
import Box from '@/shared/ui/Box';
import TransactionHeader from '@/features/transactions/components/TransactionHeader';
import TransactionList from '@/features/transactions/components/TransactionList';
import NoResult from '@/features/transactions/pages/NoResult';

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

        {results && results.length > 0 ? (
          <TransactionList transactions={results} />
        ) : (
          <NoResult />
        )}
      </Box>
    </div>
  );
};

export default App;
