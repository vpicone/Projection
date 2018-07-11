const { ApolloServer } = require ("apollo-server");
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const { typeDefs, resolvers } = require("./resolverMap");
const server = new ApolloServer({ typeDefs, resolvers });

try {
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`); //tslint:disable-line
  });
} catch (error) {
  console.error(error); //tslint:disable-line
}
