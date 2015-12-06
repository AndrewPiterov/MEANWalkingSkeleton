var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.NODE_ENV === 'development' ? 3030 : 8080;

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/routes')(app);
require('./server/config/mongoose')(config);

module.exports = app;