import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';
import '../styles/main.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    />

    <Navigation siteTitle={data.site.siteMetadata.title} />

    <div className="container">{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
