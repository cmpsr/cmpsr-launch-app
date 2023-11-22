import { getStaticRoutes } from '@cmpsr/nextjs-contentful-renderer';

type GetStaticPathsArgs = {
  domain?: string;
  preview?: boolean;
};

const getStaticSlugs = async ({
  domain = process.env.SITE_DOMAIN,
  preview = process.env.CONTENTFUL_PREVIEW === 'true',
}: GetStaticPathsArgs = {}) => {
  const routes = await getStaticRoutes(domain, preview);
  return routes.map((route) => route.slug);
};

export const pathsRepository = {
  getStaticSlugs,
};
