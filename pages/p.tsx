import { GetServerSideProps, NextPage } from 'next';
import { getMdx } from '../src/libs/mdx';
import { ErrorBoundary } from '../src/components/ErrorBoundary';
import { Page as PageComponent } from '../src/Page';

export const Page: NextPage<unknown> = ({ content, theme }: { content: unknown; theme: unknown }) => {
  return (
    <ErrorBoundary>
      <PageComponent content={content} theme={theme} />
    </ErrorBoundary>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const mdx = await getMdx(id as string);
  const { content, theme } = mdx;

  return {
    props: {
      content,
      theme,
    },
  };
};

export default Page;
