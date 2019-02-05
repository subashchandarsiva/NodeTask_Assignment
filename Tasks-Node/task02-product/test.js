var server = require('./index.js');
var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest(server);

describe('GET /giveProduct', function() {
    it('returns a product of two numbers', function(done) {
        request.get('/giveProduct?input1=10&input2=5')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.product).to.eql(50);
                done(err);
            });
    });
});