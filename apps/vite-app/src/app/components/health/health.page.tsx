import { Button, Section, Skeleton, Text } from '@cmpsr/components';
import useHealthController from './health.controller';

export default function HealthPage() {
  const { query, handleGoBack } = useHealthController();

  if (!query.data) {
    return <Skeleton />;
  }

  return (
    <Section as="main" p="1rem">
      <Text variant="text-body-bold">
        System status: <Text as="span">{query.data.status}</Text>
      </Text>
      <Button onClick={handleGoBack} variant="link-secondary">
        Go back
      </Button>
    </Section>
  );
}
