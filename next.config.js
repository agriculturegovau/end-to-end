/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
  assetPrefix: isProd ? '/end-to-end/' : undefined,
  basePath: isProd ? '/end-to-end' : undefined,
};
