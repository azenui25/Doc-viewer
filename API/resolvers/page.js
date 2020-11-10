const uuid = require('uuid');


module.exports = {
  Query: {
    pages: () => {
      return pages;
    },
    page: (_, { id }) => {
      return pages.find(page => page.id === id)
    },
  },
  Mutation: {
    createPage: (_, { input }) => {
      const page = { ...input, id: uuid.v4() };
      pages.push(page);
      return page;
    }
  },
  Page: {
    document: ({ documentId }) => {
      return documents.find(document => document.id === documentId)
    }
  }
}