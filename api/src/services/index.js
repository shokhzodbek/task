const documents = require('./documents/documents.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(documents);
};
