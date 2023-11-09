import { Divider, Flex, Text } from '@cmpsr/components';
import { Component, PropsWithChildren } from 'react';

export class ErrorBoundary extends Component<
  PropsWithChildren<{}>,
  {
    hasError: boolean;
    error?: Error;
  }
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  render() {
    return this.state.hasError ? (
      <Flex padding="1rem" gap="2rem" pt="3rem" direction="column">
        <Text as="h1" variant="text-body-display-L" color="text-error">
          An error ocurred while generating the preview
        </Text>
        <Text variant="text-body-display-M">
          Please double check that you are not using custom components not available in the preview app, or try again
          later.
        </Text>
        {this.state.error && (
          <>
            <Divider />
            <Text fontWeight="bold">Error message:</Text>
            <Text>{this.state.error?.message}</Text>
          </>
        )}
      </Flex>
    ) : (
      this.props.children
    );
  }
}
