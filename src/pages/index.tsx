import React from 'react';
import { Layout } from '../layouts';
import { SEO } from '../components';
import styled from '@emotion/styled';
import baseStyle from '../styles/base-style';

const Index: React.FCX = ({ className }) => (
  <div className={className}>Gatsby Starter skeleton blog</div>
);

const StyledIndex = styled(Index)`
  ${baseStyle};
`;

export default () => (
  <Layout>
    <SEO title='Top' description='top page' pathname='/' />
    <StyledIndex />
  </Layout>
);
