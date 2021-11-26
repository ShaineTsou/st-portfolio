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
      "Shaine Tsou is a Front End Developer with hands-on experience in JavaScript, React and Python areas with eagerness to continuously learn and master web technologies.",
    url: "https://www.shainetsou.space/", // No trailing slash allowed!
    image: "/og-image.png",
    twitterImage: "/twitter-image.png",
    twitterUsername: "@ShaineTsou",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skills`,
        path: `${__dirname}/src/content/skills/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shaine Tsou`,
        short_name: `ST`,
        start_url: `/`,
        background_color: `#2c2c2c`,
        theme_color: `#2c2c2c`,
        display: `standalone`,
        icon: `src/images/icon-raw.png`,
        icons: [
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/favicons/maskable-st-icon-196x196.png`,
            sizes: `196x196`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
