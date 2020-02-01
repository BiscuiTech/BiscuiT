import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';
import useTranslation from '../hooks/useTranslation'
import Menu from './Menu'
import { useSprings, animated } from 'react-spring';
import Overlay from './Overlay';

const HeaderStyles = styled.div`
  background: white;
  height: 60px;
  width: 100%;
`;

const Logo = styled.div`
  margin: auto;
  height: 60px;
  img {
    margin: auto;
    height: 50px;
    width: auto;
    display: block;
    margin: auto;
    padding-top: 5px;
    cursor: pointer;
  }
  @media (min-width: 580px) {
    max-height:100px;
    img {
      width: auto;
      max-height:100px;
    }
  }
`;



const Header = () => {
  const { t, locale } = useTranslation()
  const [isNavOpen, setNavOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setNavOpen(!isNavOpen);
  };
  return (
    <>
      <HeaderStyles>
        <Menu onClick={handleClick} />
        <Logo>
          <Link href="/[lang]" as={`/${locale}`} >
            <Image publicId="biscui.tech/BiscuiTech_Logo_2019.png" cloudName="biscuitech" alt="BiscuiTech Logo">
              <Transformation height="200" quality="auto" crop="scale" />
            </Image>
          </Link>
        </Logo>
      </HeaderStyles>
      <Overlay isOpen={isNavOpen} onClick={handleClick} />
    </>

  )
}

export default Header