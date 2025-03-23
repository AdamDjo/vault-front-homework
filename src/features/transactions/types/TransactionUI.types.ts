import { ReactNode } from 'react';

export type TransactionUIProps = {
  title: string;
  subtitle: string;
  amount: string | null;
  CryptoIcon: React.ElementType;
  gradient: string;
  overlayIcon: ReactNode;
  overlayColor: string;
};
