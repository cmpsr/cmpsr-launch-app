import { getStaticRoutes } from '@cmpsr/nextjs-contentful-renderer';

export const staticPaths = async () => {
  const routes = await getStaticRoutes();
  return routes.map((route) => route.slug);
};
