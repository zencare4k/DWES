// test/fibonacciController.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const { expect } = chai;

describe('GET /fibonacci', () => {
  it('should return the correct Fibonacci number', (done) => {
    chai.request(app)
      .get('/fibonacci?num=7')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.fibonacci).to.equal(13);
        done();
      });
  });

  it('should return 400 for invalid input', (done) => {
    chai.request(app)
      .get('/fibonacci?num=-1')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error');
        done();
      });
  });
});
