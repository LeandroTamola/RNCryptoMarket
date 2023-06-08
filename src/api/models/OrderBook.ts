export type OrderBookDto = {
  lastUpdateId: number;
  bids: [string, string][];
  asks: [string, string][];
};
