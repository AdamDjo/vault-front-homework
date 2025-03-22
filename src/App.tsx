import { useState } from 'react';
import TextInput from '@/shared/ui/TextInput';
import { useFetchTransactions } from '@/hooks/useFetchTransactions';
import { useDebounce } from '@/hooks/useDebounce';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const debouncedText = useDebounce(searchText, 500);
  const { isLoading, results } = useFetchTransactions(debouncedText);

  return (
    <div>
      <TextInput
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />
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
    </div>
  );
};

export default App;
