import { getStaticRoutes } from '@cmpsr/nextjs-contentful-renderer';

export const staticPaths = async () => {
  const routes = await getStaticRoutes(process.env.SITE_DOMAIN, process.env.CONTENTFUL_PREVIEW === 'true');
  return routes.map((route) => route.slug);
};
