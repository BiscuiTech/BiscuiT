import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Menu from './Menu';
import ContactButton from './ContactButton';
import useTranslation from '../hooks/useTranslation'
import Header from './Header';

const NavStyles = styled.div`
  background: white;
  display: none;
  max-height: 100px;
  height: 100px;
  width: 100%;
  position: relative;
`;

const Navigation = () => {
  const { t, locale } = useTranslation()
  const { pathname } = useRouter();
  return (
    <NavStyles>
      {/* <ContactWrapper display={pathname === '/contact' ? 'none' : 'block'}>
        <ContactButton
          href="/[lang]/contact"
          as={`/${locale}/contact`}
        >{t("common")["contactMe"]}</ContactButton>
      </ContactWrapper> */}
      {/* <Menu /> */}
    </NavStyles>
  );
};

export default Navigation;
