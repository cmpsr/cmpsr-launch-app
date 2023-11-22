import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Page } from '../components/Page';
import { PageProps } from '../types/page';
import { pageRepository } from '../repositories/page';

export const getServerSideProps: GetServerSideProps<PageProps> = async (context: GetServerSidePropsContext) =>
  await pageRepository.getDynamicPageContent(context);

export default Page;
