import React from 'react';
import styled from 'styled-components';

const BallStyles = styled.div`
  position: absolute;
  border-radius: 100%;
  opacity: 0.7;
  height: ${props => props.height};
  width: ${props => props.width};
  top: ${props => props.top};
  right: ${props => props.right};
  background: ${props => props.background};
  /* z-index: -1; */
`;

const Ball = props => <BallStyles height={props.width} {...props} />;

export default Ball;
