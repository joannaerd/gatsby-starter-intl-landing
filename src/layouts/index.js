import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import '../styles/main.scss';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const propTypes = {
  children: PropTypes.func,
};

function TemplateWrapper({ children, locale, messages }) {
  const defaultLocale = 'pl'; // TODO: get this from settings

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale={defaultLocale}>
      <div className="main-content">
        <Navigation siteTitle={'Gatsby Intl Landing'} /> {/*TODO: get this from settings*/}
        {children()}
        <Footer availableLangs={['pl', 'en']} />
      </div>
    </IntlProvider>
  );
}

TemplateWrapper.propTypes = propTypes;

export default TemplateWrapper;
