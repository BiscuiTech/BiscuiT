import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';
import Socials from './Socials';

const Pane = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  pointer-events: ${props => (props.isOpen ? 'all' : 'none')};
`;

const OverlayPane = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: linear-gradient(125.95deg, #0082fa 0%, #25c3d9 50%, #d1a637 100%);
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
  margin: 20px auto;
  text-decoration: none;
  font-size: 36px;
  color: white;
  font-family: ${props => props.theme.menu.font};
  font-weight: 200;
  justify-self: center;
  transition: 0.3s ease border;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: solid 2px transparent;
  :hover {
    border-bottom: solid 2px white;
  }
`;

const Overlay = ({ isOpen }) => {
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
          <Link href="/who">
            <StyledLink>Who</StyledLink>
          </Link>
          <Link href="/what">
            <StyledLink>What</StyledLink>
          </Link>
          <Link href="/how">
            <StyledLink>How</StyledLink>
          </Link>
        </LinkBox>
        <Socials />
      </OverlayPane>
    </Pane>
  );
};

export default Overlay;
