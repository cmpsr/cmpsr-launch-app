import { GetStaticPaths, GetStaticProps } from 'next';
import { Page } from '../components/Page';
import { staticPaths } from '../staticPaths';
import { getStaticPropsContent } from '../getStaticPropsContent';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: (await staticPaths()).map((slug: string) => ({ params: { slug } })),
  fallback: false,
});

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
