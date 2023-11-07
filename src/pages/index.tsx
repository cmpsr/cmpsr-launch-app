import { GetStaticProps } from 'next';
import { Page } from '../Page';
import { getStaticPropsContent } from '../getStaticPropsContent';

export const getStaticProps: GetStaticProps = async ({ preview }) => await getStaticPropsContent('/', preview || false);

export default Page;
