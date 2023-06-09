import { OrderType } from './Order';

export interface ExchangeInfoDto {
  timezone: string;
  serverTime: number;
  rateLimits: RateLimit[];
  exchangeFilters: any[];
  symbols: SymbolDto[];
}

export interface RateLimit {
  rateLimitType: string;
  interval: string;
  intervalNum: number;
  limit: number;
}

export interface SymbolDto {
  symbol: string;
  status: Status;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: QuoteAsset;
  quotePrecision: number;
  quoteAssetPrecision: number;
  baseCommissionPrecision: number;
  quoteCommissionPrecision: number;
  orderTypes: OrderType[];
  icebergAllowed: boolean;
  ocoAllowed: boolean;
  quoteOrderQtyMarketAllowed: boolean;
  allowTrailingStop: boolean;
  cancelReplaceAllowed: boolean;
  isSpotTradingAllowed: boolean;
  isMarginTradingAllowed: boolean;
  filters: Filter[];
  permissions: Permission[];
  defaultSelfTradePreventionMode: SelfTradePreventionMode;
  allowedSelfTradePreventionModes: SelfTradePreventionMode[];
}

export type SelfTradePreventionMode = 'NONE' | 'EXPIRE_TAKER' | 'EXPIRE_MAKER' | 'EXPIRE_BOTH';

export interface Filter {
  filterType: FilterType;
  minPrice?: string;
  maxPrice?: string;
  tickSize?: string;
  minQty?: string;
  maxQty?: string;
  stepSize?: string;
  limit?: number;
  minTrailingAboveDelta?: number;
  maxTrailingAboveDelta?: number;
  minTrailingBelowDelta?: number;
  maxTrailingBelowDelta?: number;
  bidMultiplierUp?: string;
  bidMultiplierDown?: string;
  askMultiplierUp?: string;
  askMultiplierDown?: string;
  avgPriceMins?: number;
  minNotional?: string;
  applyMinToMarket?: boolean;
  maxNotional?: string;
  applyMaxToMarket?: boolean;
  maxNumOrders?: number;
  maxNumAlgoOrders?: number;
  maxPosition?: string;
}

export type FilterType =
  | 'PRICE_FILTER'
  | 'LOT_SIZE'
  | 'ICEBERG_PARTS'
  | 'MARKET_LOT_SIZE'
  | 'TRAILING_DELTA'
  | 'PERCENT_PRICE_BY_SIDE'
  | 'NOTIONAL'
  | 'MAX_NUM_ORDERS'
  | 'MAX_NUM_ALGO_ORDERS'
  | 'MAX_POSITION';

export type Permission = 'SPOT' | 'MARGIN' | 'TRD_GRP_004' | 'TRD_GRP_005' | 'TRD_GRP_006' | 'LEVERAGED';

export type QuoteAsset =
  | 'BTC'
  | 'ETH'
  | 'USDT'
  | 'BNB'
  | 'TUSD'
  | 'PAX'
  | 'USDC'
  | 'XRP'
  | 'USDS'
  | 'TRX'
  | 'BUSD'
  | 'NGN'
  | 'RUB'
  | 'TRY'
  | 'EUR'
  | 'ZAR'
  | 'BKRW'
  | 'IDRT'
  | 'GBP'
  | 'UAH'
  | 'BIDR'
  | 'AUD'
  | 'DAI'
  | 'BRL'
  | 'BVND'
  | 'VAI'
  | 'USDP'
  | 'DOGE'
  | 'UST'
  | 'DOT'
  | 'PLN'
  | 'RON'
  | 'ARS';

export type Status = 'TRADING' | 'BREAK';
