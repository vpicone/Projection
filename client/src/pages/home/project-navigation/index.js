import React, { Component } from 'react'
import styled from 'styled-components'
import GridContainer from '../../components/GridContainer';

const ProjectNavigationContainer = styled(GridContainer)`
      background-color: #699b3b;
      grid-area: aside-2;
`

export default class ProjectList extends Component {
  render() {
    return (
      <ProjectNavigationContainer>
        ProjectNav
      </ProjectNavigationContainer>
    )
  }
}
