import { useState } from 'react';
import { useFetchTransactions } from '@/hooks/useFetchTransactions';
import { useDebounce } from '@/hooks/useDebounce';
import TransactionHeader from '@/features/transactions/components/TransactionHeader';
import TransactionList from '@/features/transactions/components/TransactionList';
import NoResult from '@/features/transactions/pages/NoResult';
import Section from '@/shared/ui/Section';
import Box from '@/shared/ui/Box';
import clsx from 'clsx';

const TransactionHistoryPage = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedText = useDebounce(searchText, 500);
  const { isLoading, results, error } = useFetchTransactions(debouncedText);

  const hasResults = results && results.length > 0;
  const isSearchActive = searchText !== '';

  return (
    <Section className="min-h-screen flex items-center justify-center">
      <Box
        className={clsx(
          'rounded-3xl p-6 pb-0 sm:w-lg max-w-[440px] bg-white border border-[#E8E8E8] shadow-[0_0_4px_rgba(0,0,0,0.04)] relative'
        )}
      >
        <TransactionHeader
          searchText={searchText}
          onSearchChange={setSearchText}
          isLoading={isLoading}
        />
        <Box className="relative overflow-y-auto gap-3 flex flex-col h-[400px] no-scrollbar">
          {/* If we have transactions: display the list */}
          {!isLoading && hasResults && (
            <TransactionList transactions={results} />
          )}

          {/* If search is active but no match: show no result feedback */}
          {!isLoading && !hasResults && !error && isSearchActive && (
            <NoResult />
          )}
          {/* If API error: fallback to no result */}
          {!isLoading && error && !hasResults && <NoResult />}
        </Box>
      </Box>
    </Section>
  );
};
export default TransactionHistoryPage;
