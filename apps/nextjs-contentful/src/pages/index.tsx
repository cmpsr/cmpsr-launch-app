import { GetStaticProps } from 'next';
import { Page } from '../components/Page';
import { pageRepository } from '../repositories/page';

export const getStaticProps: GetStaticProps = async (context) =>
  await pageRepository.getStaticPageContent({ ...context, params: { slug: '/' } });

export default Page;
