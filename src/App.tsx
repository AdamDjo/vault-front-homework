import { useState } from 'react';
import { useFetchTransactions } from '@/hooks/useFetchTransactions';
import { useDebounce } from '@/hooks/useDebounce';
import Box from './shared/ui/Box';
import { SearchInput } from './shared/ui/Search-bar';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedText = useDebounce(searchText, 500);
  const { isLoading, results } = useFetchTransactions(debouncedText);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Box className="p-6">
        <SearchInput
          value={searchText}
          onChange={setSearchText}
          placeholder="Search"
          isLoading={isLoading}
        ></SearchInput>

        {isLoading ? (
          <div>{'Loading...'}</div>
        ) : results ? (
          <div>
            {results.map((r, index) => (
              // TODO we must finalize this integration!! not very pretty like this
              <div className="border border-dashed" key={index}>
                {JSON.stringify(r)}
              </div>
            ))}
          </div>
        ) : null}
      </Box>
    </div>
  );
};

export default App;
