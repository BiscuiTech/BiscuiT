import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import TechStack from './TechStack';

const ProjectWrapper = styled.div`
  position: relative;
  display: ${props => props.active !== null && props.active === props.index ? 'block' : 'none'};
  width: 100%;
  height: ${props => `calc(100% - ${props.imageHeight}px)`};
  max-width: 500px;
  /* max-height: ${props => `calc(26px + ${props.imageHeight}px)`}; */
  margin: 36px auto;
  margin-bottom: ${props => - props.imageHeight + 'px'};
`;

const ProjectHeader = styled.div`
  display: inline-block;
  position: relative;
`;

const TitleStyles = styled.h3`
  position: relative;
  display: block;
  font-size: ${props => props.selected ? '28px' : '18px'};
  font-weight: 400;
  font-family: 'Montserrat';
  /* text-transform: uppercase; */
  width: 100%;
  padding: 0;
  margin: 0 12px;
  /* margin-left: ${props => props.selected ? '0' : '10%'}; */
  margin-left: 10%;
`;

const arrowMovement = keyframes`
  0% {
    opacity: 0;
    left: 10%;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`


const GoBack = styled.div`
  /* position:relative;
  .arrow {
    opacity: 0;
    position: absolute;
    left: 5%;
    transform-origin: 50% 50%;
    transform: translate3d(0%, 0%, 0);
  }
  .arrow-first {
    animation: ${arrowMovement} 2s ease-in-out infinite;
  }
  .arrow-second {
    animation: ${arrowMovement} 2s 1s ease-in-out infinite;
  }
  .arrow:before,
  .arrow:after {
    background: #000;
    content: '';
    display: block;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
  }

  .arrow:before {
    transform: rotate(225deg) translateY(-3%) translateX(-1.5px);
    transform-origin: top left;
    background: #000;
  }

  .arrow:after {
    transform: rotate(-45deg) translateY(-10%);
    transform-origin: top right;
  } */
`;

const DescriptionStyles = styled.div`
  position: relative;
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
  position: relative;
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
  position: relative;
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

const Project = ({ height, width, index, info, onClick, active, selected }) => {
  const imageHeight = height * 0.35;
  const imageWidth = width * 0.35;
  useEffect(() => {
  }, [height, width])
  return (
    <ProjectWrapper imageHeight={imageHeight} active={active} index={index}>
      <ProjectHeader>

        <GoBack>
          {/* <div className="arrow arrow-first"></div>
          <div className="arrow arrow-second"></div> */}
          <span>Go Back</span>
        </GoBack>
        <TitleStyles selected={selected}>
          {info.title}
        </TitleStyles>
      </ProjectHeader>
      <ImageBackground imageHeight={imageHeight}
        imageWidth={imageWidth} />
      <Image src="/images/ocean.jpg" imageHeight={imageHeight}
        imageWidth={imageWidth} />
      {selected &&
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