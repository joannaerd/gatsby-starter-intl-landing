import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';
import Link from 'gatsby-link';

const propTypes = {
  availableLangs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function LangSwitcher({ intl, availableLangs }) {
  return (
    <div className="LangSwitcher">
      <FormattedMessage id="lang.change" />:
      {availableLangs.map(lang => {
        const classes = classNames(['LangSwitcher__link', { 'LangSwitcher__link--active': lang === intl.locale }]);
        const path = lang === intl.defaultLocale ? '' : lang;

        return (
          <Link to={`/${path}`} className={classes} key={lang}>
            {intl.formatMessage({ id: `lang.names.${lang}` })}
          </Link>
        );
      })}
    </div>
  );
}

LangSwitcher.propTypes = propTypes;

export default injectIntl(LangSwitcher);
