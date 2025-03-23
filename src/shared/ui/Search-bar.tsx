import { Search, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  onFocus?: () => void;
};

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search',
  isLoading = false,
}: SearchBarProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={clsx(
        'flex items-center w-full h-12 rounded-xl px-3 gap-3',
        'border  bg-black/5 backdrop-blur-xl',
        'focus-within:ring-2 focus-within:ring-[var(--brand-primary)]'
      )}
    >
      {/* Search icon */}
      <Search className="h-5 w-5 text-[var(--text-placeholder)]" />

      {/* Input */}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent outline-none text-black placeholder:text-[var(--text-placeholder)] text-sm font-medium"
      />

      {/* Right icon */}
      {isLoading && (
        <Loader2
          role="status"
          className="h-5 w-5 text-[var(--brand-primary)] animate-spin"
        />
      )}
    </div>
  );
};
