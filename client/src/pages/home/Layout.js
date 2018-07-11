import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";
import ProjectList from "./project-list";
import ProjectDetail from "./project-detail";
import ProjectNavigation from "./project-navigation";
import Footer from "./Footer";

const MainGrid = styled.div`
  display: grid;
  padding-bottom: 10px;
  min-height: 100vh;

  grid-template-areas: 'header' 'aside-1' 'main' 'aside-2' 'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 100px 100px 1fr  100px 100px;
  grid-row-gap: 3px;
  grid-column-gap: 3px;

  @media screen and (min-width: 36rem) {
    grid-template-areas: 'header header' 'main main' 'aside-1 aside-2' 'aside-1 aside-2' 'footer footer';
    grid-template-columns: repeat(2 , 1fr);
  }

  @media screen and (min-width: 48rem) {
    grid-template-areas: 'header header' 'main aside-1' 'main aside-2' 'main aside-2' 'footer footer';
    grid-template-columns: 3fr 2fr;
  }

  @media screen and (min-width: 75rem) {
    grid-template-areas: 'header header header' 'aside-1 main aside-2' 'aside-1 main aside-2' 'aside-1 main aside-2' 'footer footer footer';
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

export default class Layout extends Component {
  state = {
    activeProjectId: null,
  };

  setActiveProject = (activeProjectId) => {
    this.setState({ activeProjectId });
  }

  render() {
    return (
      <MainGrid>
        <Header />
        <ProjectList setActiveProject={this.setActiveProject} />
        <ProjectDetail id={this.state.activeProjectId} />
        <ProjectNavigation />
        <Footer />
      </MainGrid>
    );
  }
}
