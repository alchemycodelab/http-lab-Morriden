const request = require('supertest');
const app = require('../lib/app');
// const createResponse = require('../lib/utils/createResponse');

describe('createResponse', () => {
  it('handle the / get route and return hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        
        expect(res.text).toEqual('hi');
      });
  });

  it('handle the /echo route and return body', () => {
    return request(app)
      .post('/echo')
      .send('echo echo echo')
      .then(res => {
        
        expect(res.text).toEqual('echo echo echo');
      });
  });

  it('handle the /echo route and return body', () => {
    return request(app)
      .get('/green')
      .then(res => {
        
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });

  it('handle the /echo route and return body', () => {
    return request(app)
      .get('/red')
      .then(res => {
        
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });

  it('handle the /echo route and return body', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });
});
