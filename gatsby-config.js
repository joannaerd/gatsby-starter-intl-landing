module.exports = {
  siteMetadata: {
    title: 'Gatsby Intl Landing Starter', // TODO: add proper helmets
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
};
