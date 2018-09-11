import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

const defaultProps = {
  title: '',
  description: '',
  keywords: '',
};

function PageHelmet({ title, description, keywords }) {
  const titleProp = title ? { title } : {};

  const metaValues = [];
  if (description) metaValues.push({ name: 'description', content: description });
  if (keywords) metaValues.push({ name: 'keywords', content: keywords });
  const metaProp = metaValues.length ? { meta: metaValues } : {};

  return <Helmet {...titleProp} {...metaProp} />;
}

export default PageHelmet;
