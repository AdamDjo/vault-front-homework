export const truncateAddress = (addr: string): string =>
  addr.length > 9 ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : addr;
