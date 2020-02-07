import React from 'react'
import styled from 'styled-components';

const PageHeaderStyles = styled.h1`
  font-family: Montserrat;
  font-size: 36px;
  font-size: calc(36px + (56 - 36) * ((100vw - 500px) / (1600 - 500)));
  margin: 64px auto;
  text-align: center;
`;

const PageHeader = ({ children }) => {
  return (
    <PageHeaderStyles>
      {children}
    </PageHeaderStyles>
  )
}

const SubHeaderStyles = styled.h2`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 200;
  text-align: center;
`;

export const SubHeader = ({ children }) => {
  return (
    <SubHeaderStyles>
      {children}
    </SubHeaderStyles>
  )
}

export default PageHeader