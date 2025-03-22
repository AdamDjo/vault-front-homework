import { useState } from 'react';
import { useFetchTransactions } from '@/hooks/useFetchTransactions';
import { useDebounce } from '@/hooks/useDebounce';
import Box from './shared/ui/Box';
import TransactionHeader from './features/transactions/components/TransactionHeader';
import TransactionItem from './shared/ui/TransactionItem';

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
          <div>
            {results.map((r, index) => (
              // TODO we must finalize this integration!! not very pretty like this
              // <div className="border border-dashed" key={index}>
              //   {JSON.stringify(r)}
              // </div>
              <TransactionItem key={index}></TransactionItem>
            ))}
          </div>
        ) : null}
      </Box>
    </div>
  );
};

export default App;
