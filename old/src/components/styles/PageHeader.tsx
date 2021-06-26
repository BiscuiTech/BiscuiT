import React from 'react'
import styled from 'styled-components'

const PageHeaderStyles = styled.h1`
  font-family: Montserrat;
  font-size: 36px;
  font-size: max(36px, min(4vh, 56px));
  margin: 24px auto 64px auto;
  text-align: center;
`

const PageHeader = ({ children }) => (
  <PageHeaderStyles>{children}</PageHeaderStyles>
)

const SubHeaderStyles = styled.h2`
  font-family: 'Montserrat';
  font-size: 24px;
  font-size: min(max(20px, 2vw), 26px);
  font-weight: 200;
  text-align: center;
  margin-top: -64px;
  margin-bottom: 24px;
`

export const SubHeader = ({ children }) => (
  <SubHeaderStyles>{children}</SubHeaderStyles>
)

export default PageHeader
