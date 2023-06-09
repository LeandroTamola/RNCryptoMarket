export type OrderBookDto = {
  lastUpdateId: number;
  bids: [string, string][];
  asks: [string, string][];
};

export type OrderBookWebSocketDto = {
  E: number;
  U: number;
  a: [string, string][];
  b: [string, string][];
  e: string;
  s: string;
  u: number;
};
