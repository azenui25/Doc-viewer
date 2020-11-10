

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id)
  },
  Mutation: {
  },
  User: {
    documents: ({ id }) => documents.filter(document => document.userId === id)
  }
}