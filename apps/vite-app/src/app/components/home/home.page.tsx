import { Button, Link, Section, Text } from '@cmpsr/components';
import useHomeController from './home.controller';

export default function HomePage() {
  const { isLoggedIn, handleLogin, handleLogout } = useHomeController();

  return (
    <>
      <Section as="header" display="flex" justifyContent="space-between" alignItems="center" p="1rem">
        <Text variant="text-header-L">
          Welcome to Vite-app: Powered by Composer{' '}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </Text>
        {isLoggedIn ? (
          <Button onClick={handleLogout} variant="destroy">
            Log out
          </Button>
        ) : (
          <Button onClick={handleLogin}>Log in</Button>
        )}
      </Section>
      <Section as="main" p="1rem">
        <Text>{isLoggedIn ? 'You are logged in' : 'You are not logged in'}</Text>
        <Link href="/health">Check health status</Link>
      </Section>
    </>
  );
}
