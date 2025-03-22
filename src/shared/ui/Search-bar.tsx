import { Search, X, Loader2 } from 'lucide-react';
import clsx from 'clsx';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
};

export const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search',
  isLoading = false,
}: Props) => {
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
        className="flex-1 bg-transparent outline-none text-black placeholder:text-[var(--text-placeholder)] text-sm font-medium"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* Right icon */}
      {isLoading && (
        <Loader2 className="h-5 w-5 text-[var(--brand-primary)] animate-spin" />
      )}
    </div>
  );
};
