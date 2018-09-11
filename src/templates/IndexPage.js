import React, { Component } from 'react';
import Helmet from '../components/Helmet';

class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { title } = data.markdownRemark.frontmatter;
    const helmet = {};

    return (
      <main className="container">
        <Helmet {...helmet} />

        {title}
      </main>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexDataByLocale($locale: String!) {
    markdownRemark(frontmatter: { slug: { eq: "index" }, locale: { eq: $locale } }) {
      frontmatter {
        title
      }
    }
  }
`;
