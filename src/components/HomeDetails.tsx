import React from 'react'
import styled from 'styled-components';
import Card from './styles/Card'

const HomeDetailsStyles = styled.div`
  color: white;
  &::before{
    content: '';
    position: absolute;
    top: 90vh;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0C344B;
    transform: skewY(6deg);
    transform-origin: top left;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 80%;
  margin: auto;
`;

const TechStack = styled.div`

`;

const HomeDetails = () => {
  return (
    <HomeDetailsStyles>
      <ContentWrapper>
        <Card>I specialize in custom-made websites tailored to your needs with an attention to detail. I work with specialized modern tooling, such as the PERNGL stack.</Card>
        <TechStack>
          <p>The <span>PERN-GL</span> Stack</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quis quae saepe officiis nam non, possimus voluptatibus cum quaerat consequuntur sit numquam fuga quasi molestiae eos asperiores cupiditate soluta ea?
        </p>
        </TechStack>
      </ContentWrapper>
    </HomeDetailsStyles>
  )
}

export default HomeDetails