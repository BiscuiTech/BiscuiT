import React from 'react'
import styled from 'styled-components';

const CardStyles = styled.div`
  width: 80%;
  max-width: 500px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.35);
  background: #FFFFFF;
  border-radius: 10px;
  margin: auto;
  padding: 24px;
  font-weight: 300;
  /* font-size: 18px; */
  font-size: calc(18px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
  line-height: 22px;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
`;

const Card = ({ children }) => {
  return (
    <CardStyles>
      {children}
    </CardStyles>
  )
}


export default Card