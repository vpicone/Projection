import * as React from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_USER = gql`
  mutation addNewUser($user: UserInput!) {
    addUser(user: $user) {
      username
      id
      email
      sub
    }
  }
`

interface Data {
  username?: string;
  email?: string;
  sub: string;
}

interface Variables {
  user: {
    username?: string,
    email?: string,
    sub: string
  }
}

// class AddUserMutation extends Mutation<Data, Variables>{ };

class AddUser extends React.Component<any, object>{
  render() {
    let input;
    return (
      <Mutation mutation={ADD_USER}>
        {(addUser, { data, ...rest }) => {
          console.log(data, rest);
          return (<div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addUser({ variables: { user: { sub: "1036", email: "@123", username: 'banana' } } });
                input.value = "";
              }}
            >
              <input
                ref={node => {
                  input = node;
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
          </div>)
        }}
      </Mutation>
    )
  }
}

export default AddUser;