import { SearchInput } from '@/shared/ui/Search-bar';

type TransactionHeaderProps = {
  searchText: string;
  onSearchChange: (value: string) => void;
  isLoading?: boolean;
};

const TransactionHeader = ({
  searchText,
  onSearchChange,
  isLoading = false,
}: TransactionHeaderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-black">History</h1>
      <SearchInput
        value={searchText}
        onChange={onSearchChange}
        placeholder="Search"
        isLoading={isLoading}
      />
    </div>
  );
};

export default TransactionHeader;
