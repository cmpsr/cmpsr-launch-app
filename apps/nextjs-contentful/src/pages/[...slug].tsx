import { GetStaticPaths, GetStaticProps } from 'next';
import { Page } from '../components/Page';
import { pageRepository } from '../repositories/page';
import { pathsRepository } from '../repositories/paths';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: (await pathsRepository.getStaticSlugs())
    .filter(slug => slug !== '/')
    .map((slug: string) => ({
      params: { slug: slug.split('/').slice(1) }
    })),
  fallback: 'blocking'
});

export const getStaticProps: GetStaticProps = async context => await pageRepository.getStaticPageContent(context);

export default Page;
