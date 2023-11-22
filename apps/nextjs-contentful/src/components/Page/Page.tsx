import React from 'react';
import { ComposerProvider } from '@cmpsr/components';
import { MdxRenderer } from '@cmpsr/nextjs-contentful-renderer/client';
import { NextPage } from 'next';
import Head from 'next/head';
import { componentMap } from '../../components/componentMap';
import { PageProps } from '../../types/page';

export const Page: NextPage<PageProps> = ({ content, title, metaConfiguration, theme }) => {
  const metaTags = Object.values(metaConfiguration ?? {});
  const hasHead = title || metaTags.length > 0;

  return (
    <ComposerProvider theme={theme}>
      {hasHead && (
        <Head>
          <title>{title}</title>
          {metaTags.map(({ propertyName, propertyValue, content }) => {
            const props = {
              [propertyName]: propertyValue,
              content,
            };
            return <meta key={propertyValue} {...props} />;
          })}
        </Head>
      )}
      {content?.map((block, index) => (
        <MdxRenderer key={index} content={block} componentMap={componentMap} />
      ))}
    </ComposerProvider>
  );
};
