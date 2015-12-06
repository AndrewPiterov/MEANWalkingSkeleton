var request = require('supertest');

var app = require('./../server.js');

describe('Request to the root path', function(){
  'use strict';

  it('Returns a 200 status code', function(done){

      request(app)
        .get('/')
        .expect(200, done);

  });
});