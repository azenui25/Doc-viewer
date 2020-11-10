const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    documents: [Document!]
    document(id: ID!): Document
  }

  input createDocumentInput {
    id: ID!
        title: String!
        author: String!
        dateCreated: String!
        pages: Int!
        user: User!
  }

  extend type Mutation {
    createDocument(input: createDocumentInput!): Document
  }

  type Document {
    id: ID!
    title: String!
    author: String!
    dateCreated: String!
    pages: Int!
    user: User!
}
`;