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
      <Box className="rounded-3xl p-6 pb-0 sm:w-lg max-w-[440px] bg-white border border-[#E8E8E8] shadow-[0_0_4px_rgba(0,0,0,0.04)] relative">
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
