import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Link from 'gatsby-link';

class Navigation extends Component {
  static propTypes = {
    siteTitle: PropTypes.string,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        path: PropTypes.string,
      })
    ),
    selectedTypes: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    siteTitle: '',
    routes: [{ type: 'index', path: '' }],
    selectedTypes: [],
  };

  pathForPageType = type => {
    const route = this.props.routes.find(r => r.type === type);
    return route ? route.path : null;
  };

  renderRouteLink = type => {
    const path = this.pathForPageType(type);

    if (path === null) return null;

    return (
      <Link to={path} className="Navigation__link" key={type}>
        {this.props.intl.formatMessage({ id: `navigation.pages.${type}` })}
      </Link>
    );
  };

  render() {
    const { siteTitle, selectedTypes } = this.props;

    return (
      <nav className="Navigation">
        <div className="Navigation__content">
          {siteTitle && (
            <Link to={this.pathForPageType('index')} className="Navigation__link">
              {siteTitle}
            </Link>
          )}

          <div className="Navigation__menu">{selectedTypes.map(this.renderRouteLink)}</div>
        </div>
      </nav>
    );
  }
}

export default injectIntl(Navigation);
