import { useEffect, useState } from 'react';

import TextInput from './components/TextInput';

const API = 'http://localhost:5000';

type Notif = {
  id: string;
  type: string;
  data: {
    id: number;
    amount?: number;
    unit?: string;
    from?: string;
    to?: string;
    name?: string;
    currency?: string;
  };
};

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Notif[]>(null);

  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/search?q=${searchText}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    effect();
  }, [searchText]);

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
