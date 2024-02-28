import authService from '@/services/auth.service';

export default function useHomeController() {
  function handleLogin() {
    authService.login({ token: 'token' });
    window.location.reload();
  }

  function handleLogout() {
    authService.logout();
    window.location.reload();
  }

  const isLoggedIn = authService.isLoggedIn();

  return {
    handleLogin,
    handleLogout,
    isLoggedIn,
  };
}
