const langConfig = require('../../lang-config');

const getPath = ({ locale, slug }) => {
  const langPath = locale === langConfig.defaultLocale ? '' : `/${locale}`;
  const slugPath = slug ? `/${slug}` : '';
  return `${langPath}${slugPath}` || '/';
};

module.exports = { getPath };
