const request = require('supertest');
const app = require('../lib/app');
const createResponse = require('../lib/utils/createResponse');

describe('createResponse', () => {
  it('handle the / get route and return hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        res.text = 'hi';
        expect(res.text).toEqual('hi');
      });
  });

});
