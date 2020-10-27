const path = require('path')
const { config } = require("./config.js")
const { subfolder } = require("./subfolder.js")

const generateFavicons = (sizes) => {
  return sizes.map(size => {
    return {
      src: `favicons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    };
  });
};

module.exports = {
  pathPrefix: subfolder,
  siteMetadata: {
    title: `Youpal Group`,
    description: `Youpal Group`,
    author: `Youpal Group`,
    siteUrl: config.siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `500`, '700']
          },
          {
            family: `DM Sans`,
            variants: [`400`, `500`, '700']
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Youpal Group`,
        short_name: `YoupalGroup`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `./static/favicon.png`,
        icons: generateFavicons([48, 72, 96, 144, 192, 256, 384, 512]),
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./static/favicon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        srcSetBreakpoints: [800, 1200, 1920],
        maxWidth: 1920
      },
    },
    'gatsby-plugin-brotli',
    'gatsby-plugin-zopfli'
  ],
}
