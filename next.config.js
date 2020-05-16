const withSourceMaps = require('@zeit/next-source-maps')();
const TerserPlugin = require('terser-webpack-plugin');

module.exports = withSourceMaps({
  target: 'serverless',
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
      config.resolve.alias['react-dom$'] = 'react-dom/profiling';
      config.resolve.alias['scheduler/tracing'] = 'scheduler/tracing-profiling';
      // config.optimization.minimizer = [
      //   new TerserPlugin({
      //     terserOptions: {
      //       keep_classnames: true,
      //       keep_fnames: true,
      //     },
      //   }),
      // ];
    }
    config.module.rules.push({
      test: /\.mdx?$/,
      use: 'raw-loader',
    });

    return config;
  },
  experimental: {
    async rewrites() {
      return [{ source: '/sitemap.xml', destination: '/api/sitemap.xml' }];
    },
    catchAllRouting: true,
  },
  env: {
    NOW_URL: process.env.NOW_URL,
  },
});
