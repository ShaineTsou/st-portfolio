/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Shaine Tsou",
    description:
      "Shaine Tsou is a Front End Developer with hands-on experience in JavaScript/ES6+, React, GraphQL, data structures and algorithms areas with eagerness to learn and master Back-end Development, Testing and TDD.",
    author: "Shaine Tsou",
    contact: "shaineagro06@gmail.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured-projects`,
        path: `${__dirname}/src/content/featured-projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fun-projects`,
        path: `${__dirname}/src/content/fun-projects/`,
      },
    },
  ],
}
