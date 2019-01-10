const { ApolloServer,} = require('apollo-server-express');
const bodyparser = require('body-parser');
const express = require('express');

const db = require('./database');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

db();

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);