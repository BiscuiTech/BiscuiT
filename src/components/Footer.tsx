import React from 'react'
import Socials from './Socials';
import styled from 'styled-components'

const FooterStyles = styled.div`
  width: 100%;
  height: 100%;
  background: grey;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <Socials />
    </FooterStyles>
  )
}

export default Footer