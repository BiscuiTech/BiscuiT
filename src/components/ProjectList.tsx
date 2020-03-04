import React from 'react'
import styled from 'styled-components';
import PageHeader, { SubHeader } from './styles/PageHeader'
import Project from './Project'

const Projects = styled.ul`

`;

const ProjectList = () => {
  return (
    <>
      <PageHeader>Past Projects</PageHeader>
      <SubHeader>
        View previous projects right here
      </SubHeader>
      <Projects>
        <Project />
        <Project />
      </Projects>
    </>
  )
}

export default ProjectList