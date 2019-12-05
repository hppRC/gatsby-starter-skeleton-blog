import React from 'react';
import { Layout } from '../layouts';
import { SEO } from '../components';
import { useAllPosts } from '../hooks';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

const Posts: React.FCX = ({ className }) => (
  <div className={className}>
    {useAllPosts().map(({ excerpt, frontmatter }, i) => {
      const { title, date, tags, cover } = frontmatter;
      const { fluid } = cover.childImageSharp;
      return (
        <article key={i}>
          <Img fluid={fluid} alt='eyecatch' backgroundColor={'#fff'} />
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{excerpt}</p>
          <ul>
            {tags.map((tag, j) => (
              <li key={j}>{tag}</li>
            ))}
          </ul>
        </article>
      );
    })}
  </div>
);

const StyledPosts = styled(Posts)`
  ${baseStyle};
`;

export default () => (
  <Layout>
    <SEO title='Posts' description='posts page' pathname='/posts' />
    <StyledPosts />
  </Layout>
);
