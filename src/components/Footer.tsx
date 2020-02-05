import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Image, Transformation } from 'cloudinary-react';
import useTranslation from '../hooks/useTranslation'

const FooterStyles = styled.div`
  width: 100%;
  height: 100%;
  background: #0c344b;
  margin-top: 24px;
  padding: 48px 0;
  border-top: 4px solid ${props => props.theme.color.gold};
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 6px;
  }
  img {
    margin: 0 6px;
    cursor: pointer;
  }
`;

const Footer = () => {
  const { locale } = useTranslation()

  return (
    <FooterStyles>
      <a
        href="https://www.facebook.com/biscuittech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/facebook.svg"
          width="50px"
          height="50px"
          alt="Facebook Icon \& link"
        />
      </a>
      <a
        href="https://ca.linkedin.com/in/jean-c%C3%A9dric-huet-7a0949a3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/linkedin.svg"
          width="50px"
          height="50px"
          alt="LinkedIn Icon \& link"
        />
      </a>
      <Link href="/[lang]" as={`/${locale}`}>
        <Image publicId="biscui.tech/Biscuit.png" cloudName="biscuitech" alt="BiscuiTech Logo">
          <Transformation height="80" crop="scale" />
        </Image>
      </Link>
      <a
        href="https://twitter.com/biscuitech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/twitter.svg"
          width="50px"
          height="50px"
          alt="Twitter Icon \& link"
        />
      </a>
      <a
        href="https://github.com/biscuitech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.svg"
          width="50px"
          height="50px"
          alt="GitHub Icon \& link"
        />
      </a>
    </FooterStyles>
  )
}

export default Footer