import {
  getPageContent as cmpsrGetPageContent,
  getStaticPageContent as cmpsrGetStaticPageContent,
  generateMdx,
  getDefaultTheme,
} from '@cmpsr/nextjs-contentful-renderer';
import { type GetServerSidePropsContext, type GetStaticPropsContext } from 'next';
import { theme as localTheme } from '../theme';
import { PageProps } from '../types/page';

type GetPageContentResponse = {
  props: PageProps;
};

const notFound = {
  notFound: true as const,
};

const getSlug = (path: string | string[]): string => (Array.isArray(path) ? path.join('/') : path);

type PageContext = GetStaticPropsContext | GetServerSidePropsContext;

const getPageContent = async (
  context: PageContext,
  isStatic: boolean
): Promise<GetPageContentResponse | typeof notFound> => {
  try {
    const page = isStatic
      ? await cmpsrGetStaticPageContent(
          getSlug(context.params.slug),
          context.preview || process.env.CONTENTFUL_PREVIEW === 'true'
        )
      : await cmpsrGetPageContent(context as GetServerSidePropsContext);
    if (!page) {
      return notFound;
    }
    const theme =
      page.theme ?? (await getDefaultTheme(context.preview || process.env.CONTENTFUL_PREVIEW === 'true')) ?? {};
    const content = await generateMdx(page.content || [], page.globalVariables);
    return {
      props: {
        title: page.title,
        content,
        metaConfiguration: page.metaConfiguration || null,
        theme: { ...localTheme, ...theme },
      },
    };
  } catch (err) {
    if (isTooManyRequestsError(err)) {
      return await getPageContent(context, isStatic);
    } else {
      console.error(err);
      throw err;
    }
  }
};

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

const getStaticPageContent = async (context: GetStaticPropsContext) => {
  return await getPageContent(context, true);
};

const getDynamicPageContent = async (context: GetServerSidePropsContext) => {
  return await getPageContent(context, false);
};

export const pageRepository = {
  getDynamicPageContent,
  getStaticPageContent,
};
