const superTest = require('supertest');
const app = require('../index');

describe('Items', () => {
  describe('GET /', () => {
    it('should respond with 200 OK', (done) => {
      superTest(app)
        .get('/')
        .expect(200, done);
    });
  });
});
