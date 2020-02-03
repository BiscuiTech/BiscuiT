import React from 'react'
import styled from 'styled-components';

const CardStyles = styled.div`
  width: 320px;
  box-shadow: -2px -2px 2px rgba(255, 255, 255, 0.6), 4px 4px 4px rgba(0, 0, 0, 0.35);
  background: #FFFFFF;
  border-radius: 10px;
  margin: auto;
  padding: 12px;
`;

const Card = ({ children }) => {
  return (
    <CardStyles>
      {children}
    </CardStyles>
  )
}


export default Card