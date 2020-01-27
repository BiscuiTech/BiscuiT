const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = withSourceMaps({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },
  experimental: {
    modern: true,
    async rewrites() {
      return [{ source: '/sitemap.xml', destination: '/api/sitemap.xml' }];
    },
    catchAllRouting: true,
  },
});
