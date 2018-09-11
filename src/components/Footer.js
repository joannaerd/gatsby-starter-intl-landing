import React from 'react';
import PropTypes from 'prop-types';

import LangSwitcher from './LangSwitcher';

const propTypes = {
  availableLangs: PropTypes.arrayOf(PropTypes.string),
};
const defaultProps = {
  availableLangs: [],
};

function Footer({ availableLangs }) {
  return (
    <footer className="Footer">
      <div className="Footer__content">{availableLangs.length && <LangSwitcher availableLangs={availableLangs} />}</div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
