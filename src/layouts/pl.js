import React from 'react';
import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pl';

import Index from './index';
import messages from '../translations/pl.json';

addLocaleData(localeData);

export default props => <Index {...props} locale="pl" messages={messages} />;

export const query = graphql`
  query TemplateRoutingDataPL {
    routingData: allMarkdownRemark(filter: { frontmatter: { locale: { eq: "pl" } } }) {
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
