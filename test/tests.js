var request = require('supertest');

var app = require('./../server.js');

describe('Request to the root path', function(){
  'use strict';

  it('Returns a 200 status code', function(done){

      request(app)
        .get('/')
        .expect(200, done);

  });

  it('Returns a HTML format', function(done){

    request(app)
      .get('/')
      .expect('Content-Type',/html/, done);

  });

  it('Returns a MEAN App text', function(done){

    request(app)
      .get('/')
      .expect(/mean app/i, done);

  });
});