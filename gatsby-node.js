import { getPath } from './src/helpers/getPath';

const path = require('path');
const _ = require('lodash');
const langConfig = require('./lang-config');

const { availableLocales } = langConfig;

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

  const pagesByLocale = Object.entries(_.groupBy(pages.edges, 'node.frontmatter.locale'));

  pagesByLocale.forEach(([locale, edges]) => {
    if (availableLocales.includes(locale)) {
      edges.forEach(({ node: { frontmatter: { locale, slug, template } } }) => {
        const pathProp = getPath({ locale, slug });

        createPage({
          path: pathProp,
          component: path.resolve(`src/templates/${template}.js`),
          layout: locale,
          context: {
            locale,
            slug,
          },
        });
      });
    }
  });
};
