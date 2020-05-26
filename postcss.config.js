// postcss.config.js
module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    [
      '@fullhuman/postcss-purgecss',
      process.env.NODE_ENV === 'production'
        ? {
            // Specify the paths to all of the template files in your project
            content: [
              './src/**/*.html',
              './src/**/*.vue',
              './src/**/*.jsx',
              './src/**/*.tsx',
              // etc.
            ],

            // Include any special characters you're using in this regular expression
            defaultExtractor: (content) =>
              content.match(/[\w-/.:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
};
/*
module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env'],
}; */
