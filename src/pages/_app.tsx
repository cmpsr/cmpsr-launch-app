import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ComposerProvider } from '@cmpsr/components';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { theme } from '../theme';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Next.js & Contentful: Powered by Composer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        sizes="16x16"
        href="https://images.ctfassets.net/zfrki53eq8jx/BFxs2EQI9sxdhvlzvby9O/e821396e84ddd929a01468776b7dd70a/Composer_Icon_-_Dark_Edition_3x.png?h=16"
      />
    </Head>
    <ComposerProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ComposerProvider>
  </>
);

export default App;
