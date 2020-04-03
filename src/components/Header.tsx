import React from 'react'
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslation'
import LocaleSwitcher from './LocaleSwitcher'

const HeaderStyles = styled.header`
  height: 60px;
  width: 100vw;
  position: absolute;
  top:0;
`;

const Header = () => {
  const { locale } = useTranslation()
  return (
    <>
      <HeaderStyles>
        <LocaleSwitcher />
      </HeaderStyles>
    </>

  )
}

export default Header