import React from 'react';

function NotFoundPage() {
  return (
    <section className="paragraph">
      <h1 className="paragraph__title">404 - Not found</h1>
      <p className="paragraph__text">ou just hit a route that doesn&#39;t exist... the sadness.</p>
      <p className="paragraph__text">
        <Link to="/">Go back to homepage</Link>
      </p>
    </section>
  );
}

export default NotFoundPage;
