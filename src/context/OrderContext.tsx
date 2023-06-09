import React, { FC, PropsWithChildren, createContext, useContext, useMemo, useReducer } from 'react';
import { Action, ContextState, State, StateMutators } from './types';

const initialState: ContextState = {
  symbol: 'BNBUSDT',
  setOrder: () => {},
};

const OrderContext = createContext<ContextState>(initialState);

const orderReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_ORDER': {
      return {
        ...state,
        symbol: action.payload,
      };
    }
    default:
      return state;
  }
};

export const OrderProvider: FC<PropsWithChildren<unknown>> = (props) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const setOrder: StateMutators['setOrder'] = (payload) => {
    dispatch({ type: 'SET_ORDER', payload });
  };

  const value = useMemo(
    () => ({
      ...state,
      setOrder,
    }),
    [state],
  );

  return <OrderContext.Provider value={value} {...props} />;
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrderContext must be used within a OrderProvider');
  }
  return context;
};
