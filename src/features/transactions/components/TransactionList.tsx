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
      <Box className="relative overflow-y-auto gap-3  flex flex-col  h-[400px] py-6 ">
        {transactions.map((transaction) => {
          const mappedProps = mapTransactionToUI(transaction);
          return <TransactionItem key={transaction.id} {...mappedProps} />;
        })}
      </Box>
      <div className="pointer-events-none absolute bottom-0 rounded-4xl left-0 right-0 h-16 bg-gradient-to-t from-white to-white/0"></div>
    </>
  );
};

export default TransactionList;
