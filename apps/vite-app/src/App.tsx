import { ComposerProvider } from '@cmpsr/components';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { queryClient } from './client/query';
import router from './router';

export function App() {
  return (
    <ComposerProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(router)} />
      </QueryClientProvider>
    </ComposerProvider>
  );
}

export default App;
