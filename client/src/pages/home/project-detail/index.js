import React, { Component } from "react";
import ProjectDetail from "./ProjectDetail";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  query getProject($id: ID!){
  project(id: $id) {
    name
    description
    id
    creator {
        username
    }
    users {
      username
    }
  }
}
`;

export default class ProjectDetailContainer extends Component {
  render() {
    return this.props.id ? <Query query={query} variables={{ id: this.props.id }}>
      {({ loading, error, data }) => {
        if (loading) { return <ProjectDetail status="loading" />; }
        if (error) { return <ProjectDetail status="error" />; }
        return <ProjectDetail project={data.project}></ProjectDetail>;
      }}
    </Query> : <ProjectDetail status="No selection"></ProjectDetail>;
  }
}
