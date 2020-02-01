import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from '../hooks/useTranslation'
import LocaleSwitcher from './LocaleSwitcher'

const Pane = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  display: flex;
  pointer-events: ${props => (props.isOpen ? 'all' : 'none')};
  z-index: 9;
  background: ${props => props.isOpen ? '#00000080' : null};
   transition: background .5s ease-out;
`;

const OverlayPane = styled(animated.div)`
  width: 100%;
  height: calc(100% - 60px);
  max-width: 600px;
  background: white;
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 0%);
`;

const LinkBox = styled.div`
  margin: 24px 12px;
  display: inline-block;
  border-bottom: 1px solid hsl(0,0%,0%,20%);
`;

const StyledLink = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  font-family: ${props => props.theme.menu.font};
  font-size: 24px;
  font-weight: 200;
  color: black;
  z-index: 1;
  justify-self: center;
  margin: 12px;
  cursor: pointer;
  :after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    height: 6px;
    margin-top: -10px;
    z-index: -1;
    display: block;
    content: '';
    background: #FBB03B;
    /* box-shadow:
      inset 100px 0px 0px -40px #FBB03B,
      inset 110px 10px 0px -40px red; */
    box-shadow: inset -40px 0px 30px -18px #FBB03B;
    transform: ${props => (props.current === true ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: right;
    transition: transform 250ms ease-in;
  }
  :hover:after {
    /* transform: ${props => (props.current === true ? null : 'scaleX(1)')}; */
    transform:scaleX(1);
    transform-origin: left;
  }
`;

interface IOverlay {
  isOpen: boolean,
  query?: string
}

const Overlay = ({ isOpen, query }: IOverlay) => {
  const { locale, t } = useTranslation()
  const { pathname } = useRouter();
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: {
      tension: 400,
      friction: 80,
    },
  });
  return (
    <Pane isOpen={isOpen}>
      <OverlayPane
        style={{
          transform: x.interpolate(x => `translate3d(-${x /* * -1 */}%,0,0)`),
        }}
      >
        <LinkBox>
          <Link href="/[lang]" as={`/${locale}`} >
            <StyledLink current={pathname === '/[lang]'}>Home</StyledLink>
          </Link>
          <Link href="/[lang]/who" as={`/${locale}/who`}>
            <StyledLink current={pathname === '/[lang]/who'}>About</StyledLink>
          </Link>
          <Link href="/what">
            <StyledLink>Work</StyledLink>
          </Link>
          <Link href="/how">
            <StyledLink>Blog</StyledLink>
          </Link>
          <Link href="/[lang]/contact" as={`/${locale}/contact`}>
            <StyledLink current={pathname === '/[lang]/contact'}>Contact</StyledLink>
          </Link>
        </LinkBox>
        <LocaleSwitcher />
      </OverlayPane>
    </Pane>
  );
};

export default Overlay;
