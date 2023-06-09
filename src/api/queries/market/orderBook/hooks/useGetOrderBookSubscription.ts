import { useEffect, useRef } from 'react';
import { UseQueryResult, useQuery, useQueryClient } from '@tanstack/react-query';
import { OrderBookWebSocketDto } from '@src/api/models/OrderBook';
import { OrderBookKeys } from '../OrderBookKeys';

const orderBookWebSocket = (symbol: string) => {
  const queryClient = useQueryClient();
  const websocketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const connectWebSocket = () => {
      const websocket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth@1000ms`);

      websocket.onopen = () => {
        console.log('connected');
      };

      websocket.onmessage = (event) => {
        let data = JSON.parse(event.data);
        const prevData = (queryClient.getQueryData<OrderBookWebSocketDto>(OrderBookKeys.orderBookWebSocket) ||
          {}) as OrderBookWebSocketDto;

        const updatedData = {
          ...prevData,
          ...data,
          b: data.b ? updateOrders(prevData.b || [], data.b) : prevData.b,
          a: data.a ? updateOrders(prevData.a || [], data.a) : prevData.a,
        };

        queryClient.setQueryData(OrderBookKeys.orderBookWebSocket, updatedData);
      };

      websocketRef.current = websocket;
    };

    connectWebSocket();

    return () => {
      if (websocketRef.current) {
        websocketRef.current.close();
        websocketRef.current = null;
      }
    };
  }, [queryClient, symbol]);
};

const updateOrders = (prevOrders: [string, string][], updatedOrders: [string, string][]): [string, string][] => {
  const updatedOrderMap = new Map<string, string>(prevOrders);
  updatedOrders.forEach(([price, quantity]) => {
    updatedOrderMap.set(price, quantity);
  });
  const updatedOrdersArray = Array.from(updatedOrderMap.entries());
  return updatedOrdersArray.slice(0, 10);
};

const useGetOrderBookWebSocket = (symbol: string): UseQueryResult<OrderBookWebSocketDto> => {
  orderBookWebSocket(symbol);
  const queryClient = useQueryClient();
  return useQuery(OrderBookKeys.orderBookWebSocket, () => {
    const data = queryClient.getQueryData<OrderBookWebSocketDto>(OrderBookKeys.orderBookWebSocket);
    return data || {};
  });
};

export { useGetOrderBookWebSocket };
