import React from 'react'
import styled, { keyframes } from 'styled-components'

const expanding = keyframes`
  0% {
    width: 30%;
  }
  100% {
    width: calc(100% - 24px);
  }
`;

const shrinking = keyframes`
  0% {
    width: calc(100% - 24px);
  }
  100% {
    width: 30%;
  }
`;

const ButtonStyles = styled.button`
  background: ${props => props.theme.button.background};
  color: hsl(0, 0%, 90%);
  font-family: monospace;
  padding: 6px 12px;
  margin: 6px;
  width: 30%;
  border-radius: 6px;
  box-shadow:4px 4px 6px rgba(0, 0, 0, 0.35);
  animation: ${shrinking} 0.3s ease-in-out forwards;
  &:hover{
    animation: ${expanding} 0.3s ease-in-out forwards;
  }
`;

const button = ({ children }) => {
  return (
    <ButtonStyles>
      {children}
    </ButtonStyles>
  )
}

export default button