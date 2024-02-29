type LoginArgs = {
  token: string;
};

const ACCESS_TOKEN_KEY = 'session-token';

function login(args: LoginArgs) {
  return localStorage.setItem(ACCESS_TOKEN_KEY, args.token);
}

function logout() {
  return localStorage.removeItem(ACCESS_TOKEN_KEY);
}

function isLoggedIn() {
  return !!localStorage.getItem(ACCESS_TOKEN_KEY);
}

function getToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export default {
  login,
  logout,
  isLoggedIn,
  getToken,
};
