const { gql } = require("apollo-server");
const { UserModel } = require("./schema/User");
const { ProjectModel } = require("./schema/Project");

const typeDefs = gql`
  input UserInput {
    sub: String!
    email: String
    username: String
  }

  type User {
    id: ID!
    sub: String!
    email: String
    username: String
    projects: [Project]
  }

  type Project {
    id: ID!
    name: String!
    description: String
    creator: User!
    users: [User]
  }

  type Query {
    getUsers: [User]
    user(id: ID!): User
    project(id: ID!): Project
  }

  type Mutation {
    addUser(user: UserInput!): User
  }

`;

const resolvers = {
  Query: {
    user(root, args) {
      return UserModel.findOne({ sub: args.id });
    },
    getUsers() {
      return UserModel.find({});
    },
    project(root, args) {
      return ProjectModel.findById(args.id);
    },
  },
  Mutation: {
    addUser(root, { user: { sub, ...metaData } }) {
      console.log(sub, metaData);
      return UserModel.findOneAndUpdate({ sub: sub }, metaData, { upsert: true, new: true });
    },
  },
  User: {
    projects(user) {
      return ProjectModel.find({ $or: [{ creator: user.sub }, { users: user.sub }] });
    },
  },
  Project: {
    creator(args) {
      return UserModel.findOne({ sub: args.creator });
    },
    users(args) {
      return UserModel.find({ sub: { $in: args.users } });
    },
  },
};

module.exports = { typeDefs, resolvers };
