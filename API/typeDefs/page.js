const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    pages: [Page!]
    page(id: ID!): Page
  }

  input createPageInput {
    id: ID!
    pageNumber: Int!
    text: String!
    document: Document!
  }

  extend type Mutation {
    createPage(input: createPageInput!): Page
  }

  type Page {
    id: ID!
    pageNumber: Int!
    text: String!
    document: Document!
}
`;