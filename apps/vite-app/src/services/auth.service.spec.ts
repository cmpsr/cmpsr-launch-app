import authService from './auth.service';

describe('auth.service', () => {
  test('should allow to login, check if the user is logged in, get token and logout', () => {
    expect(authService.isLoggedIn()).toBeFalsy();
    authService.login({ token: 'dummy_session_token' });
    expect(authService.isLoggedIn()).toBeTruthy();
    expect(authService.getToken()).toBe('dummy_session_token');
    authService.logout();
    expect(authService.isLoggedIn()).toBeFalsy();
  });
});
