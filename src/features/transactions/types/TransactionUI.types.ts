import React from 'react';
import { ReactNode } from 'react';

export type TransactionUIProps = {
  title: string;
  subtitle: string;
  amount: string | null;
  CryptoIcon: React.ElementType;
  gradient: {
    from: string;
    to: string;
  };
  overlayIcon: ReactNode;
  overlayColor: string;
};
