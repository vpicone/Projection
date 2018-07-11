import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_USER = gql`
    mutation addNewUser($user: UserInput!) {
  addUser(user: $user) {
    username
    id
    email
    sub
    projects {
      name
    }
  }
}
`