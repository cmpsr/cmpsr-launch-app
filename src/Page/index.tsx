import { MdxRenderer } from '@cmpsr/nextjs-contentful-renderer/client';
import { ComposerProvider } from '@cmpsr/components';
import { NextPage } from 'next';
import Head from 'next/head';

export const Page: NextPage<any> = ({ content, title, metaConfiguration, theme }) => {
  const metaTags = Object.values(metaConfiguration) || [];

  return (
    <ComposerProvider theme={theme}>
      <Head>
        <title>{title}</title>
        {metaTags.map((metaTag: any) => {
          const props = {
            [metaTag.propertyName]: metaTag.propertyValue,
            content: metaTag.content,
          };
          return <meta key={metaTag.propertyValue} {...props} />;
        })}
      </Head>
      {content.map((block, index) => (
        <MdxRenderer key={index} content={block} componentMap={{}} />
      ))}
    </ComposerProvider>
  );
};
