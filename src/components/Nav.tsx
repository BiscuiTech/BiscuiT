import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Menu from './Menu';
import ContactButton from './ContactButton';
import useTranslation from '../hooks/useTranslation'
import { Image, Transformation } from 'cloudinary-react';

const NavStyles = styled.div`
  max-height: 100px;
  height: 100px;
  width: 100%;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: 2%;
    bottom: 0;
    height: 1px;
    width: 96%; /* or 100px */
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
  display: grid;
  grid-template-columns: 400px auto 150px;
  /* grid-template-rows: 1fr; */
  grid-template-areas: 'logo contact menu';
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 580px) {
    grid-template-columns: 3fr auto 1fr;
  }
`;
const ContactWrapper = styled.div`
  display: ${props => props.display};
  @media (max-width: 780px) {
    display: none;
  }
`;
const Logo = styled.div`
  grid-area: logo;
  margin: auto;
  cursor: pointer;
  img {
    height: 100px;
  }
  @media (max-width: 580px) {
    img {
      max-width: 260px;
      height: auto;
    }
  }
`;

const Nav = () => {
  const { t, locale } = useTranslation()
  const { pathname } = useRouter();
  return (
    <NavStyles>
      <Logo>
        <Link href="/[lang]" as={`/${locale}`} >
          <Image publicId="biscui.tech/BiscuiTech_Logo_2019.png" cloudName="biscuitech">
            <Transformation height="200" quality="auto" crop="scale" />
          </Image>
        </Link>
      </Logo>
      <ContactWrapper display={pathname === '/contact' ? 'none' : 'block'}>
        <ContactButton
          href="/[lang]/contact"
          as={`/${locale}/contact`}
        >{t("common")["contactMe"]}</ContactButton>
      </ContactWrapper>
      <Menu />
    </NavStyles>
  );
};

export default Nav;
