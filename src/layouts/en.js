import React from 'react';
import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

import Index from './index';
import messages from '../translations/en.json';

addLocaleData(localeData);

export default props => <Index {...props} locale="en" messages={messages} />;

export const query = graphql`
  query TemplateRoutingDataEN {
    routingData: allMarkdownRemark(filter: { frontmatter: { locale: { eq: "en" } } }) {
      edges {
        node {
          frontmatter {
            type
            slug
            locale
          }
        }
      }
    }
  }
`;
