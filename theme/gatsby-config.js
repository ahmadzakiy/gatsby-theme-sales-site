module.exports = {
  siteMetadata: {
    title: `SalesSite123.com`,
    description: `A Gatsby theme for sales to showcase their products`,
    author: `Ahmad Zakiy`,
    authorDescription: `Sales Executive`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cover",
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SalesSites123.com`,
        short_name: `SalesSites123.com`,
        start_url: `/`,
        background_color: `#df0d2d`,
        theme_color: `#df0d2d`,
        display: `standalone`,
        icon: `${__dirname}/src/images/zakiy-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        // Fill tag manager ID
        id: "",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-offline",
  ],
}
