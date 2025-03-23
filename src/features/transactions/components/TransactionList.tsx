import TransactionItem from './TransactionItem';
import { mapTransactionToUI } from '../utils';
import { Transaction } from '@/types/transaction.types';
import Box from '@/shared/ui/Box';

type Props = {
  transactions: Transaction[];
};

const TransactionList = ({ transactions }: Props) => {
  return (
    <>
      <Box className="relative overflow-y-auto gap-3  flex flex-col  h-[400px] py-6 no-scrollbar">
        {transactions.map((transaction) => {
          const mappedProps = mapTransactionToUI(transaction);
          return <TransactionItem key={transaction.id} {...mappedProps} />;
        })}
      </Box>
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none bg-gradient-to-t from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255,0)] z-20 rounded-3xl"></div>
    </>
  );
};

export default TransactionList;
