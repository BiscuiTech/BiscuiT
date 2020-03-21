import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PageHeader, { SubHeader } from './styles/PageHeader'
import Project from './Project'
import useWindowDimensions from '../lib/useWindowDimension';
import projects from '../lib/projects'

const Projects = styled.ul`
  margin: 80px 0;
  height: 100%;
  width:100%;
  display: relative;
`;

/*
function getInitialWindow() {
  if (process.browser) {
    return {
      height: window?.innerHeight,
      width: window?.innerWidth
    }
  }
} */

const ProjectList = () => {
  const { height, width } = useWindowDimensions();
  const [active, setActive] = useState(0)
  return (
    <>
      <PageHeader>Past Projects</PageHeader>
      <SubHeader>
        View previous projects right here
      </SubHeader>
      <Projects>
        {projects.map((el, index) => (
          <Project
            height={height}
            width={width}
            id={index}
            key={index}
            info={el}
            onClick={setActive}
            active={active == index ? true : false}
          />
        )
        )}
      </Projects>
    </>
  )
}

export default ProjectList