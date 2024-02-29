import App from '@/App';
import { ROUTE_HEALTH } from '@/constants/routes';
import authService from '@/services/auth.service';
import { healthMockHandler } from '@/tests/handlers/health.mock.handler';
import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';

describe('HealthPage', () => {
  const server = setupServer(healthMockHandler);

  beforeAll(() => {
    authService.login({ token: 'dummy_session_token' });
    server.listen({
      onUnhandledRequest: 'error',
    });
  });

  afterAll(() => {
    authService.logout();
    server.close();
  });

  test('should render', async () => {
    window.history.pushState({}, '', ROUTE_HEALTH);
    render(<App />);

    await waitFor(async () => screen.getByText('dummy_health_status'));
  });
});
