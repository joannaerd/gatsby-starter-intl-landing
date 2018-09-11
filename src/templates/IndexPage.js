import React from 'react';

function IndexPage({ data }) {
  const { title } = data.pageData.frontmatter;

  return <p>{title}</p>;
}

export default IndexPage;

export const query = graphql`
  query IndexDataByLocale($locale: String!) {
    pageData: markdownRemark(frontmatter: { type: { eq: "index" }, locale: { eq: $locale } }) {
      frontmatter {
        title
      }
    }
  }
`;
