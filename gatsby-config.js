/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/Flexicontact`,
  plugins: [

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `inter:300,400,500,600,700`       
          ], display: 'swap'       
      }
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },
  ],
}
