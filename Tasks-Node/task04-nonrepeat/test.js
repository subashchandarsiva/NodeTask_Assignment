var server = require('./index.js');
var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest(server);

describe('GET /nonRepeatingCharacter', function() {
    it('returns the first non repeating character in a string', function(done) {
        request.get('/nonRepeatingCharacter?input=abccadefdfe')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.output).to.eql('b');
                done(err);
            });
    });
});