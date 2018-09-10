import React from 'react';
import Link from 'gatsby-link';

function SecondPage() {
  return (
    <section className="paragraph">
      <h1 className="paragraph__title">Hi from the second page</h1>
      <p className="paragraph__text">Welcome to page 2.</p>
      <p className="paragraph__text">
        <Link to="/">Go back to the homepage</Link>
      </p>
    </section>
  );
}

export default SecondPage;
