import React from 'react'
import styled from 'styled-components';
import LocaleSwitcher from './LocaleSwitcher'

const HeaderStyles = styled.header`
  height: 60px;
  width: 100vw;
  position: fixed;
  top:0;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <LocaleSwitcher />
    </HeaderStyles>
  )
}

export default Header