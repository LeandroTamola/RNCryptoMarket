export type Action = { type: 'SET_ORDER'; payload: string };

export interface StateMutators {
  setOrder: (payload: string) => void;
}

export type ContextState = State & StateMutators;

export type State = { symbol: string };
