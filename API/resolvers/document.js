const uuid = require('uuid');



module.exports = {
  Query: {
    documents: () => {
      return documents;
    },
    document: (_, { id }) => {
      return documents.find(document => document.id === id)
    },
  },
  Mutation: {
    createDocument: (_, { input }) => {
      const document = { ...input, id: uuid.v4() };
      documents.push(document);
      return document;
    }
  },
  Document: {
    user: ({ userId }) => {
      return users.find(user => user.id === userId)
    }
  }
}