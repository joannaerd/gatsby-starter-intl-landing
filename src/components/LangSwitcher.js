import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';
import Link from 'gatsby-link';
import langConfig from '../../lang-config';

function LangSwitcher({ intl }) {
  return (
    <div className="LangSwitcher">
      <FormattedMessage id="lang.change" />:
      {langConfig.availableLocales.map(lang => {
        const classes = classNames(['LangSwitcher__link', { 'LangSwitcher__link--active': lang === intl.locale }]);
        const path = lang === langConfig.defaultLocale ? '' : lang;

        return (
          <Link to={`/${path}`} className={classes} key={lang}>
            {intl.formatMessage({ id: `lang.names.${lang}` })}
          </Link>
        );
      })}
    </div>
  );
}

export default injectIntl(LangSwitcher);
