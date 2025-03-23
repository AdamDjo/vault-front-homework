import { CryptoUnit } from '@/types/transaction.types';

const GRADIENTS: Record<CryptoUnit, { from: string; to: string }> = {
  BTC: { from: '#F7931A', to: '#F7931A' },
  ETH: { from: '#627EEA', to: '#627EEA' },
  SOL: { from: '#9945FF', to: '#14F195' },
  XRP: { from: '#00AAE4', to: '#00AAE4' },
  DEFAULT: { from: '#F7931A', to: '#F7931A' },
};

export const getCryptoGradient = (
  unit: string | undefined
): { from: string; to: string } => {
  const safeUnit = (unit as CryptoUnit) || 'DEFAULT';
  return GRADIENTS[safeUnit] ?? GRADIENTS.DEFAULT;
};
