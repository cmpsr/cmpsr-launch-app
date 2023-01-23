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
  let theme = page.theme;
  if (!theme) {
    theme = await getDefaultTheme(preview || false);
  }
  const content = await generateMdx(page.content);
  return {
    props: {
      title: page.title,
      content,
      metaConfiguration: page.metaConfiguration || [],
      theme: { ...localTheme, ...(theme || {}) },
    },
  };
};
