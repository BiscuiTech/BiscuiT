import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  grid-area: header;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: calc(28px + (64 - 28) * ((100vw - 300px) / (1600 - 300)));
  margin: 8px;
`;

const Header = ({ children }) => <H1>{children}</H1>;

export default Header;
