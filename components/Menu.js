import React, { useState } from 'react';
import styled from 'styled-components';
import { useSprings, animated } from 'react-spring';
import Overlay from './Overlay';

const X = styled.div`
  grid-area: menu;
  z-index: 10;
  align-self: center;
  .nav {
    width: 64px;
    height: 64px;
    position: absolute;
    right: 0%;
    top: 60%;
    transform: translate(-50%, -50%);
    padding: 0px;
    background-color: transparent;
    border-style: none;
    outline: none;
    cursor: pointer;
  }
  .nav span {
    width: 100%;
    height: 2px;
    background-color: #000;
    display: block;
    position: absolute;
    border-radius: 2px;
    transition: all 0.5s ease;
  }
  .nav span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav span:nth-child(2) {
    top: 20px;
    right: 0px;
  }
  .nav span:nth-child(3) {
    top: 40px;
    left: 0px;
  }
  @keyframes span1 {
    0% {
      transform: translate(0, 0);
    }
    60% {
      transform: rotate(-110deg) translate(-7px, -7px);
    }
    100% {
      transform: rotate(-45deg) translate(-20px, 20px);
      background-color: #fff;
    }
  }
  .nav.open span:nth-child(1) {
    animation: span1 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    animation-delay: 1.1s;
  }
  @keyframes span2 {
    0% {
      transform: translate(0, 0) scale(1);
    }
    20% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 0) scale(1);
    }
    40% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 0) scale(1);
    }
    50% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 18px) scale(1);
    }
    80% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, -16px) scale(1);
      background-color: #fff;
    }
    100% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 100px) scale(0);
    }
  }
  .nav.open span:nth-child(2) {
    animation: span2 1.5s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }

  @keyframes span3 {
    0% {
      transform: translate(0, 0);
    }
    60% {
      transform: rotate(80deg) translate(-7px, -7px);
    }
    100% {
      transform: rotate(45deg) translate(-7px, -7px);
      background-color: #fff;
    }
  }
  .nav.open span:nth-child(3) {
    animation: span3 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    animation-delay: 0.7s;
  }
  @keyframes span1_close {
    0% {
      transform: rotate(-45deg) translate(-20px, 20px);
    }
    100% {
      transform: rotate(0deg) translate(0, 0);
    }
  }
  .nav span:nth-child(1) {
    animation: span1_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  @keyframes span2_close {
    0% {
      transform: translate(0, 40px) scale(0);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }
  .nav span:nth-child(2) {
    animation: span2_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  @keyframes span3_close {
    0% {
      transform: rotate(45deg) translate(-7px, -7px);
    }
    100% {
      transform: rotate(0deg) translate(0, 0);
    }
  }
  .nav span:nth-child(3) {
    animation: span3_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  @media (max-width: 780px) {
    .nav {
      width: 48px;
      height: 48px;
    }
    .nav span:nth-child(1) {
      top: 0px;
      left: 0px;
    }
    .nav span:nth-child(2) {
      top: 15px;
      right: 0px;
    }
    .nav span:nth-child(3) {
      top: 30px;
      left: 0px;
    }
    @keyframes span3 {
      0% {
        transform: translate(0, 0);
      }
      60% {
        transform: rotate(80deg) translate(-7px, -7px);
      }
      100% {
        transform: rotate(45deg) translate(-1px, -1px);
        background-color: #fff;
      }
    }
  }
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  spa

`;

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setNavOpen(!isNavOpen);
  };
  return (
    <>
      <X open={isNavOpen}>
        <button
          className={`nav ${isNavOpen ? 'open' : ''}`}
          onClick={e => handleClick(e)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </X>
      <Overlay isOpen={isNavOpen} />
    </>
  );
};

export default Menu;
