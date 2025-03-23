import EthereumIcon from '@/shared/icons/EthereumIcon';
import { CryptoUnit } from '@/types/transaction.types';
import { Bitcoin, DollarSign } from 'lucide-react';

const ICONS_MAP: Record<CryptoUnit, React.ElementType> = {
  BTC: Bitcoin,
  ETH: EthereumIcon,
  SOL: DollarSign,
  XRP: DollarSign,
  DEFAULT: Bitcoin,
};

export const getCryptoIcon = (unit: string | undefined): React.ElementType => {
  const safeUnit = (unit as CryptoUnit) || 'DEFAULT';
  return ICONS_MAP[safeUnit] ?? ICONS_MAP.DEFAULT;
};
