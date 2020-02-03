import React from 'react'
import styled from 'styled-components';
import Card from './styles/Card'

const HomeDetailsStyles = styled.div`
  * >{
    z-index: 5;
  }
`;

const ClippedBackground = styled.div`
  height: 100%;
  width: 100%;
  min-height: 200px;
  background: #0C344B;
  clip-path: polygon(0% 0%, 100% 50px, 100% 100%, 0% 100%, 0% 0%);
  /* position: fixed; */
  z-index:-10;
`;

const HomeDetails = () => {
  return (
    <HomeDetailsStyles>
      <ClippedBackground />
      <Card>I specialize in custom-made websites tailored to your needs with an attention to detail. I work with specialized modern tooling, such as the PERNGL stack.</Card>
    </HomeDetailsStyles>
  )
}

export default HomeDetails