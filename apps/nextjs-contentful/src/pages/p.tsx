import { GetServerSideProps, NextPage } from 'next';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Page as PageComponent } from '../components/Page';
import { PageProps } from '../types/page';
import { mdxRepository } from '../repositories/mdx';

const Page: NextPage<PageProps> = ({ content, theme }) => {
  return (
    <ErrorBoundary>
      <PageComponent content={content} theme={theme} title="Preview" metaConfiguration={null} />
    </ErrorBoundary>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const mdx = await mdxRepository.getMdx(id as string);
  const { content, theme } = mdx;

  return {
    props: {
      content,
      theme,
    },
  };
};

export default Page;
