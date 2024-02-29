import App from '@/App';
import authService from '@/services/auth.service';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

describe('Home', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...window.location,
        reload: vi.fn(),
      },
    });
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render login button if no user logged in', () => {
    authService.logout();
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByRole('button', { name: /log in/i })).toBeDefined();
  });
  test('should render logout button if user logged in', () => {
    authService.login({ token: 'dummy_session_token' });
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByRole('button', { name: /log out/i })).toBeDefined();
  });
  test('should log in user when login button is clicked and reload the page', () => {
    authService.logout();
    window.history.pushState({}, '', '/');
    render(<App />);
    screen.getByRole('button', { name: /log in/i }).click();
    expect(authService.isLoggedIn()).toBeTruthy();
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
  test('should logout user when log out button is clicked and reload the page', () => {
    authService.login({ token: 'dummy_session_token' });
    window.history.pushState({}, '', '/');
    render(<App />);
    screen.getByRole('button', { name: /log out/i }).click();
    expect(authService.isLoggedIn()).toBeFalsy();
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
