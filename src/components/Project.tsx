import React from 'react'
import styled from 'styled-components';

const ProjectWrapper = styled.li`
  margin: 12px auto;
  max-width: 500px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: auto;
  grid-template-areas:
    '. . image image image',
    'title title title title title'
    'description description description description description'
    'techstack techstack techstack techstack techstack';
`;

const TitleStyles = styled.h3`
  font-size: 28px;
  font-weight: 400;
  font-family: 'Montserrat';
  text-transform: lowercase;
  grid-area: 'title';
  width: 100%;
  background: red;
`;

const DescriptionStyles = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: hsl(0, 0%, 25%);
  grid-area: description;
  padding: 12px;
  width: 100%;
  background: blue;
`;


const Image = styled.img`
  /* margin: 20px; */
  height: 100%;
  width: 100%;
  /* height: 30vh;
  width: 30vh; */
  grid-area: 'image';
  /* transform: translateY(-30vh); */
  border-radius: 10px;
  /* transform: translateY(calc(-30vh - 40px)); */
`;
const ImageBackground = styled.div`
  background: orange;
  /* height: calc(30vh + 40px);
  width: calc(30vh + 40px); */
  /* height: 30vh;
  width: 30vh; */
  /* grid-area: image; */
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

const TechStack = styled.div`
  display: flex;
  grid-area: techstack;
  /* grid-column: 1 / 6;
  grid-row: 3 / 4; */
  width: 100%;
  height:100%;
  background: green;
`;

const Project = () => {
  return (
    <ProjectWrapper>
      <TitleStyles>
        example.com
      </TitleStyles>
      <DescriptionStyles>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!
      </DescriptionStyles>
      <ImageBackground />
      <Image src="/images/ocean.jpg" />
      <TechStack>
        <ul>
          <li>apollo</li>
          <li>graphql</li>
        </ul>
      </TechStack>
    </ProjectWrapper>
  )
}

export default Project