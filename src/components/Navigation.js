import React from 'react';
import Link from 'gatsby-link';

function Navigation({ siteTitle }) {
  return (
    <nav className="Navigation">
      <div className="Navigation__content">
        {/*TODO: refactor routing*/}
        <Link to="/" className="Navigation__link">
          {siteTitle}
        </Link>

        <div className="Navigation__menu">
          <Link to="/" className="Navigation__link">
            Link 1
          </Link>

          <Link to="/page-2" className="Navigation__link">
            Link 2
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
