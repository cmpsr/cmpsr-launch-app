import { getStaticPageContent, generateMdx, getDefaultTheme } from '@cmpsr/nextjs-contentful-renderer';
import { GetStaticPropsResult } from 'next';
import { theme as localTheme } from '../theme';

export const getStaticPropsContent = async (
  slug: string,
  preview = false
): Promise<GetStaticPropsResult<Record<string, unknown>>> => {
  const page = await getStaticPageContent(slug, preview);
  if (!page) {
    return {
      notFound: true,
    };
  }
  const theme = page.theme ?? (await getDefaultTheme(preview)) ?? {};
  const content = await generateMdx(page.content || [], page.globalVariables);
  return {
    props: {
      title: page.title,
      content,
      metaConfiguration: page.metaConfiguration || [],
      theme: { ...localTheme, ...theme },
    },
  };
};
