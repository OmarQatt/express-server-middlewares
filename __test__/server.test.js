'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('Verify API server', () => {

    it('Check home page', async () => {
        const res = await request.get('/');
        expect(res.text).toEqual('Bravo But Where is the Number')
    })
  
    it('Check if get square is return a square of number', async () => {
      const res = await request.get('/square?num=23');
      expect(res.text).toEqual('{"num":529}');
    });
  
    it('Check if get square is return a error message if square is not a number', async () => {
      const res = await request.get('/square?num=2t9');
      expect(res.text).toEqual('{"code":500,"message":"Server Error: 2t9 is not a number"}');
    });
  });