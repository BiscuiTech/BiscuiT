import React, { useEffect } from 'react'
import styled from 'styled-components';
import TechStack from './TechStack';

const ProjectWrapper = styled.li`
  margin: 12px auto;
  max-width: 500px;
  width: 100%;
  height: ${props => `calc(100% - ${props.imageHeight}px)`};
  margin-bottom: ${props => - props.imageHeight + 'px'};
  display: relative;
`;

const TitleStyles = styled.h3`
  font-size: ${props => props.active ? '28px' : '18px'};
  font-weight: 400;
  font-family: 'Montserrat';
  /* text-transform: uppercase; */
  width: 100%;
  padding: 0;
  margin: 0 12px;
`;

const DescriptionStyles = styled.div`
  padding: 12px;
  margin: 0 12px;
  display: inline-block;
  transform: ${props => `translate3d(0,-${props.imageHeight + 5 + 'px'},0)`};
  background: white;
  background: #FFFFFF;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
    font-size: 18px;
    color: hsl(0, 0%, 25%);
    padding: 24px 20px;
  }
`;

const Image = styled.img`
  display: block;
  height: ${props => props.imageHeight + 'px' || '100%'};
  width: ${props => props.imageWidth + 'px' || '100%'};
  min-width: 70%;
  border-radius: 10px;
  transform: ${props => `translate3d(-15px,-${25 + props.imageHeight + 'px'},0)`};
  float: right;
  margin-right: 8%;
  @media (max-width:600px) {
    width: 70%;
    min-width: unset;
  }
`;

const ImageBackground = styled.div`
  display: block;
  height: ${props => props.imageHeight + 50 + 'px' || '100%'};
  width: ${props => props.imageWidth + 30 + 'px' || '100%'};
  min-width: calc(70% + 30px);
  border-radius: 10px;
  background: orange;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  float: right;
  margin-right: 8%;
  @media (max-width:600px) {
    width: calc(70% + 30px);
    min-width: unset;
  }
`;


const Project = ({ height, width, id, info, onClick, active }) => {
  const imageHeight = height * 0.35;
  const imageWidth = width * 0.35;
  useEffect(() => {
  }, [height, width])
  return (
    <ProjectWrapper imageHeight={imageHeight}>
      <TitleStyles active={active}>
        {info.title}
      </TitleStyles>
      <ImageBackground imageHeight={imageHeight}
        imageWidth={imageWidth} />
      <Image src="/images/ocean.jpg" imageHeight={imageHeight}
        imageWidth={imageWidth} />
      {active &&
        <>
          <DescriptionStyles imageHeight={imageHeight}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci fuga consequuntur amet nulla fugiat deleniti eos qui neque, deserunt exercitationem labore eaque iste nobis corporis, illo tenetur ab rem!
            </p>
          </DescriptionStyles>
          <TechStack imageHeight={imageHeight} info={info.techStack} />
        </>
      }
    </ProjectWrapper>
  )
}

export default Project