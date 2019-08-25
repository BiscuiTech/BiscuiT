import React, { useState } from 'react';
import styled from 'styled-components';
import { useSprings, animated } from 'react-spring';
import Overlay from './Overlay';

const X = styled.div`
  align-self: center;
  grid-area: menu;
  position: relative;
  z-index: 100;
  cursor: pointer;
`;

const SVG = styled.svg`
  height: 80px;
  cursor: inherit;
  width: 80px;
  margin: 0 20px;
  line {
    cursor: inherit;
  }
  /* border: 1px solid black; */
  &:hover {
    #top {
      animation: hoverTop 1s ease-in-out alternate;
    }
    #middle {
      animation: hoverMiddle 1s ease-in-out alternate;
    }
    #bottom {
      animation: hoverBottom 1s ease-in-out alternate;
    }
  }
  @keyframes hoverTop {
    50% {
      transform: translateX(-15px);
    }
  }
  @keyframes hoverMiddle {
    50% {
      transform: translateX(-35px);
    }
  }
  @keyframes hoverBottom {
    50% {
      transform: scaleX(0.7);
    }
  }
`;

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  /* const [springs, setSprings] = useSprings(lines.length, lines.map(line => ({
    x1:'',
    x2:''
  }))); */
  return (
    <>
      <X
        onClick={() => setNavOpen(!isNavOpen)}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <SVG
          width="80"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <line
            id="top"
            x1="25"
            x2="70"
            y1="20"
            y2="20"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <line
            id="middle"
            x1="45" //  move this to 36 and back to 56
            x2="70" //  move this to 76 and back to 96
            y1="40"
            y2="40"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <line
            id="bottom"
            x1="10"
            x2="70"
            y1="60"
            y2="60"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </SVG>
      </X>
      <Overlay isOpen={isNavOpen} />
    </>
  );
};

export default Menu;
