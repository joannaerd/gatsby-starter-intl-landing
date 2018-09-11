import React from 'react';

function InfoPage({ data }) {
  const { title } = data.markdownRemark.frontmatter;

  return <p>infoPage: {title}</p>;
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
