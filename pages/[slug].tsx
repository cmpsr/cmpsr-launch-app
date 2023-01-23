import { GetStaticPaths, GetStaticProps } from 'next';
import { Page } from '../src/Page';
import { staticPaths } from '../src/staticPaths';
import { getStaticPropsContent } from '../src/getStaticPropsContent';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: (await staticPaths()).map((slug: string) => ({ params: { slug } })),
  fallback: false,
});

const getSlug = (path: string | string[]): string => (Array.isArray(path) ? path.join('/') : path);

export const getStaticProps: GetStaticProps = async ({ preview, params }) =>
  await getStaticPropsContent(getSlug(params.slug), preview || false);

export default Page;
