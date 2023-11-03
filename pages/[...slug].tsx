import { GetStaticPaths, GetStaticProps } from 'next';
import { Page } from '../src/Page';
import { staticPaths } from '../src/staticPaths';
import { getStaticPropsContent } from '../src/getStaticPropsContent';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await staticPaths();
  const filteredPaths = paths.filter((path) => path !== '/');

  return {
    paths: filteredPaths.map((slug) => ({
      params: { slug: slug.split('/').slice(1) },
    })),
    fallback: 'blocking',
  };
};

const getSlug = (path: string | string[]): string => (Array.isArray(path) ? path.join('/') : path);

export const getStaticProps: GetStaticProps = async ({ preview, params }) => {
  try {
    return await getStaticPropsContent(getSlug(params.slug), preview || false);
  } catch (err) {
    if (isTooManyRequestsError(err)) {
      return await getStaticProps({ preview, params });
    } else {
      console.error(err);
      throw err;
    }
  }
};
export default Page;

const isTooManyRequestsError = (err: any): boolean => {
  if (has429StatusCode(err)) {
    return true;
  }
  const networkError = err?.networkError;
  if (Array.isArray(networkError)) {
    return networkError.some(has429StatusCode);
  }
  return false;
};

const has429StatusCode = (error: any): boolean =>
  error?.statusCode === 429 || error?.status === 429 || error?.message?.includes('429');
