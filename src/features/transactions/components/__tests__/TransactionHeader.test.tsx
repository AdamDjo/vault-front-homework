import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TransactionHeader from '../TransactionHeader';

describe('TransactionHeader', () => {
  it('renders search input correctly', () => {
    render(
      <TransactionHeader
        searchText=""
        onSearchChange={jest.fn()}
        isLoading={false}
      />
    );
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('calls onSearchChange when typing', async () => {
    const handleChange = jest.fn();
    render(
      <TransactionHeader
        searchText=""
        onSearchChange={handleChange}
        isLoading={false}
      />
    );

    const input = screen.getByPlaceholderText(/search/i);
    await userEvent.type(input, 'btc');

    expect(handleChange).toHaveBeenCalledTimes(3); // b, t, c
    expect(handleChange).toHaveBeenCalledWith('b');
    expect(handleChange).toHaveBeenCalledWith('t');
    expect(handleChange).toHaveBeenCalledWith('c');
  });

  it('shows loader when isLoading is true', () => {
    render(
      <TransactionHeader
        searchText=""
        onSearchChange={jest.fn()}
        isLoading={true}
      />
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
