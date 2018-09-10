import React from 'react';
import Link from 'gatsby-link';

function IndexPage() {
  return (
    <section className="paragraph">
      <h1 className="paragraph__title">Hi people</h1>
      <p className="paragraph__text">Welcome to your new Gatsby site.</p>
      <p className="paragraph__text">Now go build something great.</p>
      <p className="paragraph__text">
        <Link to="/page-2/">Go to page 2</Link>
      </p>
    </section>
  );
}

export default IndexPage;
