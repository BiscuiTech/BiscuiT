import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const BallStyles = styled.div`
  position: absolute;
  border-radius: 100%;
  opacity: 0.7;
  height: ${props => props.height};
  width: ${props => props.width};
  top: ${props => props.top};
  right: ${props => props.right};
  background: ${props => props.background};
  z-index: -1;
`;
/* const anim = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(${Math.random() * (i % 2 === 0 ? -11 : 11)}rem, ${to.y}rem)`;
  }
`; */

const Ball = props => <BallStyles height={props.width} {...props} />;

export default Ball;
