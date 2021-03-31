/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/docs`,
  plugins: [

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `poppins:300,400,500,600,700`       
          ], display: 'swap'       
      }
  }
  ],
}
