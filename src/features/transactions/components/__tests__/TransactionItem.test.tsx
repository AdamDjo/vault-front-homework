import { render, screen } from '@testing-library/react';
import TransactionItem from '../TransactionItem';
import EthereumIcon from '@/shared/icons/EthereumIcon';

describe('TransactionItem', () => {
  it('renders correct data', () => {
    render(
      <TransactionItem
        title="Received"
        subtitle="From 0xABCDEF"
        amount="2 ETH"
        CryptoIcon={EthereumIcon}
        gradient={{ from: '#627EEA', to: '#627EEA' }}
        overlayIcon={<div data-testid="overlay-icon" />}
        overlayColor="bg-green-500"
      />
    );

    expect(screen.getByText('Received')).toBeInTheDocument();
    expect(screen.getByText('From 0xABCDEF')).toBeInTheDocument();
    expect(screen.getByText('2 ETH')).toBeInTheDocument();
    expect(screen.getByTestId('overlay-icon')).toBeInTheDocument();
  });
});
