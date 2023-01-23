import { GetStaticProps } from 'next';
import { Page } from '../src/Page';
import { getStaticPropsContent } from '../src/getStaticPropsContent';

export const getStaticProps: GetStaticProps = async ({ preview }) => await getStaticPropsContent('/', preview || false);

export default Page;
