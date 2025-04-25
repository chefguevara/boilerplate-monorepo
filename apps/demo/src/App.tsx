import { Message } from '@chefguevara/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useFetchMessage } from '@/api/messages';
const App = () => {
  const { data, isLoading, isError } = useFetchMessage();
  const message = data as Message;
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error fetching message</h1>}
      {!isLoading && !isError && (
        <h1>{message?.message || 'No message available'}</h1>
      )}
    </div>

  );
};

const AppWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default AppWrapper;
