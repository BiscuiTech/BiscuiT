import React from 'react'
import Socials from './Socials';
import styled from 'styled-components'

const FooterStyles = styled.div`
  width: 100%;
  height: 100%;
  background: #0c344b;
  margin-top: 24px;
  padding: 48px 0;
  border-top: 4px solid ${props => props.theme.color.gold};
`;

const Footer = () => {
  return (
    <FooterStyles>
      <Socials />
    </FooterStyles>
  )
}

export default Footer