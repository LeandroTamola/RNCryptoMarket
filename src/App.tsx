import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RootNavigator } from './navigation/RootNavigator/RootNavigator';

function App(): JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="light-content" />
      <RootNavigator />
    </QueryClientProvider>
  );
}

export default App;
