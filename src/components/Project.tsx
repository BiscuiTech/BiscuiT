import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.li`

`;

const TitleStyles = styled.h3`

`;

const DescriptionStyles = styled.p`

`;


const Image = styled.img``;
const ImageBackground = styled.div``;

const TechStack = styled.div`
  display: flex;
`;

const Project = () => {
  return (
    <Wrapper>
      <TitleStyles>
        example.com
      </TitleStyles>
      <DescriptionStyles>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!
      </DescriptionStyles>
      <Image />
      <ImageBackground />
      <TechStack>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </TechStack>
    </Wrapper>
  )
}

export default Project