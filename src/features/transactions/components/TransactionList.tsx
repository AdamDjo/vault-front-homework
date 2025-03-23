import TransactionItem from './TransactionItem';
import { mapTransactionToUI } from '../utils';
import { Transaction } from '@/types/transaction.types';

type Props = {
  transactions: Transaction[];
};

const TransactionList = ({ transactions }: Props) => {
  return (
    <div className="relative">
      <div className="space-y-2 h-[130px] overflow-y-auto pr-2">
        {transactions.map((transaction) => {
          const mappedProps = mapTransactionToUI(transaction);
          return <TransactionItem key={transaction.id} {...mappedProps} />;
        })}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TransactionList;
