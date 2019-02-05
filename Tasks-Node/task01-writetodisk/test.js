var server = require('./index.js');
var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest(server);

describe('POST /writeToFile', function() {
    it('returns success after succesfully writing to file', function(done) {
        request.post('/writeToFile')
            .send({name:"subash",age:"23"})
            .expect(200)
            .end(function(err, res) {
                expect(res.text).to.eql('Data written to file');
                done(err);
            });
    });
});