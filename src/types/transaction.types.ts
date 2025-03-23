// types/Transaction.types.ts
export type Transaction = {
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
// types/CryptoUnit.types.ts
export type CryptoUnit = 'BTC' | 'ETH' | 'SOL' | 'XRP' | 'DEFAULT';
