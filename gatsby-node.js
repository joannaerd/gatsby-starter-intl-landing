const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const defaultLocale = 'pl';

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const { data: { pages } } = await graphql(`{
    pages: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            locale,
            template,
            slug
          }
        }
      }
    }
  }`);

  _(pages.edges).groupBy('node.frontmatter.locale').forOwn((postsInLocale, locale) => {
    createPage({
      path: (locale === defaultLocale ? '/' : locale),
      component: path.resolve(`src/templates/IndexPage.js`),
      layout: locale,
      context: {
        locale
      },
    });
  });

  pages.edges.forEach(({ node }) => {
    const { locale, slug, template } = node.frontmatter;

    if (slug !== 'index') {
      createPage({
        path: `/${locale === defaultLocale ? '' : `${locale}/`}${slug}`,
        component: path.resolve(`src/templates/${template}.js`),
        layout: locale,
        context: {
          locale,
          slug,
        },
      });
    }
  });
};
