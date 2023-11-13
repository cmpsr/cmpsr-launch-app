import { GetStaticProps } from 'next';
import { Page } from '../Page';
import { getStaticPropsContent } from '../getStaticPropsContent';

export const getStaticProps: GetStaticProps = async ({ preview }) =>
  await getStaticPropsContent('/', preview || process.env.CONTENTFUL_PREVIEW === 'true');

export default Page;
