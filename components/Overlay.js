import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Socials from './Socials';

const Pane = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  pointer-events: ${props => (props.isOpen ? 'all' : 'none')};
  z-index: 9;
`;

const OverlayPane = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    125.95deg,
    hsl(209, 100%, 49%) 0%,
    hsl(187, 71%, 50%) 50%,
    hsl(34, 100%, 50%) 100%
  );
  background-size: 300%;
  animation: overlay-animation 4s infinite alternate;
  @keyframes overlay-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const StyledLink = styled.a`
  position: relative;
  margin: 20px auto;
  text-decoration: none;
  font-size: 36px;
  z-index: 1;
  color: white;
  font-family: ${props => props.theme.menu.font};
  /*   font-weight: 200; */
  justify-self: center;
  cursor: ${props => (props.current === true ? null : 'pointer')};

  font-style: ${props => (props.current === true ? 'italic' : 'black')};
  color: ${props => (props.current === true ? 'hsla(0, 0%, 90%,1) ' : 'white')};
  font-weight: ${props => (props.current === true ? 400 : '200')};
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
    background: #ff512f;
    box-shadow: inset -40px 0px 30px -18px #dd2476;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 250ms ease-in;
  }
  :hover:after {
    transform: ${props => (props.current === true ? null : 'scaleX(1)')};
    transform-origin: left;
  }
`;

const Overlay = ({ isOpen, query }) => {
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
          transform: x.interpolate(x => `translate3d(${x /* * -1 */}%,0,0)`),
        }}
      >
        <LinkBox>
          <Link href={pathname === '/' ? null : '/'}>
            <StyledLink current={pathname === '/'}>Homepage</StyledLink>
          </Link>
          <Link href={pathname === '/who' ? null : '/who'}>
            <StyledLink current={pathname === '/who'}>Who am I</StyledLink>
          </Link>
          {/* <Link href="/what">
            <StyledLink>What</StyledLink>
          </Link>
          <Link href="/how">
            <StyledLink>How</StyledLink>
          </Link> */}
        </LinkBox>
        <Socials /> {/* TODO: change mobile position */}
      </OverlayPane>
    </Pane>
  );
};

export default Overlay;
