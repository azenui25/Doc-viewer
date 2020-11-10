const { gql } = require('apollo-server-express');

const userTypeDefs = require('./user');
const documentTypeDefs = require('./document');
const pagetTypeDefs = require('./page');

const typeDefs = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [
  typeDefs,
  userTypeDefs,
  documentTypeDefs,
  pagetTypeDefs
]

