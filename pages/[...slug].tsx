import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { generateMdx, getDefaultTheme, getPageContent } from '@cmpsr/nextjs-contentful-renderer';
import { Page } from '../src/Page';

export const getServerSideProps: GetServerSideProps<any> = async (context: GetServerSidePropsContext) => {
  const notFound: { notFound: true } = {
    notFound: true,
  };
  try {
    const page = await getPageContent(context);
    if (!page) {
      return notFound;
    }
    let theme = page.theme;
    if (!theme) {
      theme = await getDefaultTheme(context.query.preview !== undefined);
    }

    const content = await generateMdx(page.content, page.globalVariables);
    return {
      props: {
        title: page.title,
        content,
        metaConfiguration: page.metaConfiguration || [],
        theme: theme || null,
      },
    };
  } catch (e) {
    console.error('Dynamic route error', JSON.stringify(e));
    return notFound;
  }
};

export default Page;
