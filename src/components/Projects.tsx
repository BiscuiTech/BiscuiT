import React, { useState } from 'react'
import styled from 'styled-components'
import PageHeader, { SubHeader } from './styles/PageHeader'
// import Project from "./Project";
import useWindowDimensions from '../lib/useWindowDimension'
import projects from '../lib/projects'

const Projects = styled.div`
  margin: 80px 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ProjectList = () => {
  const { height, width } = useWindowDimensions()
  const [active, setActive] = useState(0)
  return (
    <>
      {/* <PageHeader>Past Projects</PageHeader>
      <SubHeader>
        View previous projects right here
      </SubHeader>
      <Projects>
        {projects.map((el, index) => (
          <Project
            height={height}
            width={width}
            index={index}
            key={index}
            info={el}
            onClick={setActive}
            selected={active == index ? true : false}
            active={active}
          />
        )
        )}
      </Projects> */}
    </>
  )
}

export default ProjectList
