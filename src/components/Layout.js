import React from 'react';
import PropTypes from 'prop-types';

import Helmet from '../components/Helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const propTypes = {
  siteTitle: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ),
  children: PropTypes.node,
};

const defaultProps = {
  siteTitle: '',
  routes: [{ type: 'index', path: '' }],
  children: null,
};

function Layout({ children, siteTitle, routes }) {
  return (
    <div className="Layout">
      <Navigation siteTitle={siteTitle} routes={routes} selectedTypes={['index', 'privacy']} />

      <main className="container">{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
