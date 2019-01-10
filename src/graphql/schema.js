const {gql} = require('apollo-server');

const typeDefs = gql`

type User{
    id: ID!
    email: String!
    password:String!
}

type Query {
    user(id:ID!): User!
}

type Mutation{
    signUp(email:String!,password:String!):String!
    logIn(email:String!,password:String):String!
}
`;

module.exports = typeDefs;