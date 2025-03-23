import { CryptoUnit } from '@/types/transaction.types';

const GRADIENTS: Record<CryptoUnit, string> = {
  BTC: 'linear-gradient(135deg, #F7931A 0%, #F7931A 100%)',
  ETH: 'linear-gradient(135deg, #627EEA 0%, #627EEA 100%)',
  SOL: 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
  XRP: 'linear-gradient(135deg, #00AAE4 0%, #00AAE4 100%)',
  DEFAULT: 'linear-gradient(135deg, #CCCCCC 0%, #CCCCCC 100%)',
};

export const getCryptoGradient = (unit: string | undefined): string => {
  const safeUnit = (unit as CryptoUnit) || 'DEFAULT';
  return GRADIENTS[safeUnit] ?? GRADIENTS.DEFAULT;
};
