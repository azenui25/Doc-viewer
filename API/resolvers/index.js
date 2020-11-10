const userResolver = require('./user');
const documentResolver = require('./document');
const pageResolver = require('./page');

module.exports = [
  userResolver,
  documentResolver,
  pageResolver
];