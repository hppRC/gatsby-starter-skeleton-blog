import React from 'react';
import { useAllPosts } from 'src/hooks';

import styled from '@emotion/styled';

const Posts: React.FCX = ({ className }) => {
  const data = useAllPosts();
  return <></>;
};

export const StyledPosts = styled(Posts)`
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

export default StyledPosts;
