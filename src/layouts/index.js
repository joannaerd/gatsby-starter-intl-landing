import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import '../styles/main.scss';

import langConfig from '../../lang-config';
import { getPath } from '../helpers/getPath';
import Helmet from '../components/Helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const propTypes = {
  children: PropTypes.func,
};

function TemplateWrapper({ data, children, locale, messages }) {
  const routes = data.routingData.edges.map(({ node: { frontmatter: { slug, type, locale } } }) => {
    const path = getPath({ slug, locale });
    return { path, type };
  });

  const helmet = {}; // TODO: refactor to proper helmet

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale={langConfig.defaultLocale}>
      <div className="main-content">
        <Helmet {...helmet} />

        <Navigation siteTitle={'Gatsby Intl Landing'} routes={routes} selectedTypes={['index', 'privacy']} />

        <main className="container">{children()}</main>

        <Footer />
      </div>
    </IntlProvider>
  );
}

TemplateWrapper.propTypes = propTypes;

export default TemplateWrapper;
