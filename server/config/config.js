var path = require('path');

var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/meanapp',
    port: 3030,
    rootPath:rootPath
  },
  production: {
    db: 'undefened',
    port: process.env.PORT || 8080,
    rootPath:rootPath
  }
};