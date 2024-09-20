const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withContentlayer({
  experimental: {
    webpackMemoryOptimizations: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['app', 'components', 'lib', 'layouts', 'scripts'],
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'themoviedb.org'],
  },
  swcMinify: true,
});
