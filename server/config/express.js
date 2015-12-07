var express = require('express'),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  stylus = require('stylus');

module.exports = function (app, config) {

  app.set('views', config.rootPath + "/server/views");
  app.set('view engine', 'jade');

  function compile(str, path) {
    return stylus(str).set('filename', path)
  }

  app.use(stylus.middleware({
    src: config.rootPath + 'public',
    compile: compile
  }));

  app.use(logger('dev'));
  app.use(bodyParser());

  app.use(express.static(config.rootPath + "/public"));
};

