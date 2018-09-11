import React, { Component } from 'react';

class InfoPage extends Component {
  render() {
    const { data } = this.props;
    const { title } = data.markdownRemark.frontmatter;

    return <main className="container">info: {title}</main>;
  }
}

export default InfoPage;

export const query = graphql`
  query InfoDataBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;
