import { useState } from 'react';
import { useFetchTransactions } from '@/hooks/useFetchTransactions';
import { useDebounce } from '@/hooks/useDebounce';
import TransactionHeader from '@/features/transactions/components/TransactionHeader';
import TransactionList from '@/features/transactions/components/TransactionList';
import NoResult from '@/features/transactions/pages/NoResult';
import Section from '@/shared/ui/Section';
import Box from '@/shared/ui/Box';

const TransactionHistoryPage = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedText = useDebounce(searchText, 500);
  const { isLoading, results } = useFetchTransactions(debouncedText);

  return (
    <Section className="min-h-screen flex items-center justify-center justify-c">
      <Box className="rounded-3xl  p-6 pb-0 sm:w-lg bg-white shadow  relative  max-w-[440px]">
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
    </Section>
  );
};

export default TransactionHistoryPage;
