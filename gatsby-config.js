/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  // In your gatsby-config.js
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prettier',
            options: {
              // Look for local .prettierrc file.
              // The same as `prettier.resolveConfig(process.cwd())`
              usePrettierrc: true,
              // Overwrite prettier options, check out https://prettier.io/docs/en/options.html
              prettierOptions: {},
            },
          },
          // any highlight plugin should be after
          'gatsby-plugin-material-ui',
          'gatsby-plugin-styled-components',

        ],
      },
    },
  ],
};
