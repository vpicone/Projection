import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import "normalize.css";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import Routes from "./src/Routes";
import "./style.css";

// const client = new ApolloClient({
//     uri: "http://localhost:4000/",
// });
const client = new ApolloClient({
    uri: "https://projection-server.now.sh/",
});

const mountNode = document.getElementById("app");
ReactDOM.render(<ApolloProvider client={client}><Routes /></ApolloProvider>, mountNode);
