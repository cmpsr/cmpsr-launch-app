import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';

(async function initApp() {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('./tests/mock.browser');
    await worker.start();
  }

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
})();
