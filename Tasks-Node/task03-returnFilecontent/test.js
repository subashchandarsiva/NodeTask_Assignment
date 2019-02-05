var server = require('./index.js');
var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest(server);

describe('GET /Get File Content', function() {
    it('returns the content from a file', function(done) {
        request.get('/readFile')
            .expect(200)
            .end(function(err, res) {
                expect(JSON.parse(res.body.data).name).to.eql('Subash');
                done(err);
            });
    });
});