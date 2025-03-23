import { useState } from 'react';
import { useFetchTransactions } from '@/hooks/useFetchTransactions';
import { useDebounce } from '@/hooks/useDebounce';
import Box from '@/shared/ui/Box';
import TransactionHeader from '@/features/transactions/components/TransactionHeader';
import TransactionItem from '@/features/transactions/components/TransactionItem';
import { mapTransactionToUI } from '@/features/transactions/utils';

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
            {results.map(
              (r, index) => {
                const mappedProps = mapTransactionToUI(r);
                return <TransactionItem key={r.id} {...mappedProps} />;
              }
              // (
              //   // TODO we must finalize this integration!! not very pretty like this
              //   // <div className="border border-dashed" key={index}>
              //   //   {JSON.stringify(r)}
              //   // </div>

              // )
            )}
          </div>
        ) : null}
      </Box>
    </div>
  );
};

export default App;
