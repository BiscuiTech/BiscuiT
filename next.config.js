const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps')();
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });
const withPWA = require('next-pwa');

const {
  NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  NODE_ENV,
} = process.env;
process.env.SENTRY_DSN = SENTRY_DSN;

module.exports = withPlugins(
  [
    [withPWA, { pwa: { dest: 'public' } }],
    [new SentryWebpackPlugin()],
    [withBundleAnalyzer],
    [withSourceMaps],
    // [withMDX, { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'] }],
  ],
  {
    target: 'serverless',
    webpack: (config, options) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      };
      // In `pages/_app.js`, Sentry is imported from @sentry/node. While
      // @sentry/browser will run in a Node.js environment, @sentry/node will use
      // Node.js-only APIs to catch even more unhandled exceptions.
      //
      // This works well when Next.js is SSRing your page on a server with
      // Node.js, but it is not what we want when your client-side bundle is being
      // executed by a browser.
      //
      // Luckily, Next.js will call this webpack function twice, once for the
      // server and once for the client. Read more:
      // https://nextjs.org/docs#customizing-webpack-config
      //
      // So ask Webpack to replace @sentry/node imports with @sentry/browser when
      // building the browser's withBundleAnalyzer
      if (!options.isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
        config.resolve.alias['react-dom$'] = 'react-dom/profiling';
        config.resolve.alias['scheduler/tracing'] =
          'scheduler/tracing-profiling';
        // config.optimization.minimizer = [
        //   new TerserPlugin({
        //     terserOptions: {
        //       keep_classnames: true,
        //       keep_fnames: true,
        //     },
        //   }),
        // ];
      }
      if (
        SENTRY_DSN &&
        SENTRY_ORG &&
        SENTRY_PROJECT &&
        SENTRY_AUTH_TOKEN &&
        NODE_ENV === 'production'
      ) {
        config.plugins.push(
          new SentryWebpackPlugin({
            include: '.next',
            ignore: ['node_modules'],
            urlPrefix: '~/_next',
          })
        );
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
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
      EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    },
  }
);
