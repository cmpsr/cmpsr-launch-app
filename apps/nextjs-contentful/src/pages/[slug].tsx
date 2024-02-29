import { GetStaticPaths, GetStaticProps } from 'next';
import { Page } from '../components/Page';
import { pageRepository } from '../repositories/page';
import { pathsRepository } from '../repositories/paths';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: (await pathsRepository.getStaticSlugs()).map((slug: string) => ({
    params: { slug },
  })),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async (context) => {
  const pageProps = await pageRepository.getStaticPageContent(context);
  const revalidationStrategy = process.env.REVALIDATION_STRATEGY;
  return isNaN(Number(revalidationStrategy)) ? pageProps : { ...pageProps, revalidate: +revalidationStrategy };
};

export default Page;
