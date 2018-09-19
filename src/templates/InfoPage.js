import React from 'react';
import Helmet from '../components/Helmet';

function InfoPage({ data }) {
  const { content, helmet } = data.markdownRemark.frontmatter;

  return (
    <div>
      <Helmet {...helmet} />

      <p>infoPage: {content.title}</p>
    </div>
  );
}

export default InfoPage;

export const infoPageContentFragment = graphql`
  fragment infoPageContentFragment on MarkdownRemark {
    frontmatter {
      content {
        title
      }
    }
  }
`;

export const query = graphql`
  query InfoDataBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...infoPageContentFragment
      ...helmetDataFragment
    }
  }
`;
