import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation'
import { useRouter } from 'next/router';

const NavgitationStyles = styled.nav`
  background: black;
  position: fixed;
  bottom:0;
  width:100%;
  display:flex;
  justify-content: space-around;
  border-top: 1px solid ${props => props.theme.color.accent};
  border-bottom: none;
  z-index: 5;
  @media (min-width: 820px) {
    bottom: unset;
    top:0;
    width: 600px;
    background: ${props => props.theme.background};
    border-top: none;
    border-bottom: 1px solid ${props => props.theme.color.accent};
    border-radius: 5px;
    margin:auto;
    left: 50%;
    transform: translateX(-300px);
  }
`;

const StyledMenuLink = styled.a`
  font-size: 20px;
  font-size: max(18px,max(2vw, 24px));
  padding: 12px 6px;
  color: ${props => props.current ? props.theme.color.gold : 'inherit'};
  cursor: pointer;
`;

const Navigation = () => {
  const { locale, t } = useTranslation()
  const { pathname } = useRouter();
  return (
    <NavgitationStyles>
      <Link href={"/[lang]/"} as={`/${locale}/`} >
        <StyledMenuLink current={(pathname === '/[lang]') || (pathname === '/[lang]/')}>
          {t('common')['navigation_Home']}
        </StyledMenuLink>
      </Link>
      {/* <Link href={"/[lang]/blog"} as={`/${locale}/blog`} >
        <StyledMenuLink current={pathname === '/[lang]/blog'}>
          {t('common')['navigation_Blog']}
        </StyledMenuLink>
      </Link> */}
      <Link href={"/[lang]/about"} as={`/${locale}/about`} >
        <StyledMenuLink current={pathname === '/[lang]/about'}>
          {t('common')['navigation_About']}
        </StyledMenuLink>
      </Link>
      {/* <Link href={"/[lang]/projects"} as={`/${locale}/projects`} >
        <StyledMenuLink current={pathname === '/[lang]/projects'}>
          {t('common')['navigation_Projects']}
        </StyledMenuLink>
      </Link> */}
      <Link href={"/[lang]/contact"} as={`/${locale}/contact`} >
        <StyledMenuLink current={pathname === '/[lang]/contact'}>
          {t('common')['navigation_Contact']}
        </StyledMenuLink>
      </Link>
    </NavgitationStyles>
  )
}
export default Navigation
