import { render, screen } from '@testing-library/react';
import TransactionList from '../TransactionList';
import { Transaction } from '@/types/transaction.types';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'TRANSACTION_RECEIVED',
    data: {
      id: 1,
      amount: 2,
      unit: 'ETH',
      from: '0xabc',
      to: '0xdef',
    },
  },
  {
    id: '2',
    type: 'TRANSACTION_SENT',
    data: {
      id: 2,
      amount: 5,
      unit: 'BTC',
      from: '0xdef',
      to: '0xghi',
    },
  },
];

describe('TransactionList', () => {
  it('renders the list of transactions', () => {
    render(<TransactionList transactions={mockTransactions} />);

    // Check presence of mapped data
    expect(screen.getByText(/received/i)).toBeInTheDocument();
    expect(screen.getByText(/sent/i)).toBeInTheDocument();
    expect(screen.getByText(/2 ETH/i)).toBeInTheDocument();
    expect(screen.getByText(/5 BTC/i)).toBeInTheDocument();
  });

  it('renders empty state when no transactions', () => {
    render(<TransactionList transactions={[]} />);
    expect(screen.queryByText(/received/i)).not.toBeInTheDocument();
  });
});
