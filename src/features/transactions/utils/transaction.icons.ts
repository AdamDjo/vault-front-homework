import { CryptoUnit } from '@/types/transaction.types';
import { Bitcoin, DollarSign, LucideIcon } from 'lucide-react';

const ICONS_MAP: Record<CryptoUnit, LucideIcon> = {
  BTC: Bitcoin,
  ETH: DollarSign,
  SOL: DollarSign,
  XRP: DollarSign,
  DEFAULT: DollarSign,
};

export const getCryptoIcon = (unit: string | undefined): LucideIcon => {
  const safeUnit = (unit as CryptoUnit) || 'DEFAULT';
  return ICONS_MAP[safeUnit] ?? ICONS_MAP.DEFAULT;
};
