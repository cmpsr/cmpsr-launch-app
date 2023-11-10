/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@cmpsr/nextjs-contentful-renderer'],
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_ACCESS_TOKEN_DELIVERY:
      process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
    CONTENTFUL_ACCESS_TOKEN_PREVIEW:
      process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW,
    SITE_DOMAIN: process.env.SITE_DOMAIN,
  },
};

module.exports = nextConfig;
