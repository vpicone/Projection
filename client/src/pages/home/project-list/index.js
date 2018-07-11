import React, { Component } from "react";
import styled from "styled-components";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import GridContainer from "../../components/GridContainer";
import Project from "./ProjectListItem";

const ProjectListContainer = styled(GridContainer)`
    background-color: #d27a87;
    grid-area: aside-1;
`;

const query = gql`
  query getUser($id: ID!){
  user(id: $id) {
    username
    projects {
      name
      id
      creator {
        username
      }
    }
  }
}
`;

export default class ProjectList extends Component {
  render() {
    return (
      <ProjectListContainer>
        <Query query={query} variables={{id: "3"}}>
          {({loading, error, data}) => {
            if (loading) { return ""; }
            if (error) { return <p>Error!</p>; }
            const ownedProjects = data.user.projects.filter(project => true);
            return (<ul>
              {ownedProjects.map(({name, id}) =>
                <Project setActiveProject={this.props.setActiveProject} name={name} id={id} />,
                )}
              </ul>);
          }}
        </Query>
      </ProjectListContainer>
    );
  }
}
