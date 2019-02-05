var server = require('./index.js');
var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest(server);

describe('GET /webCrawler', function() {
    it('returns the list of urls where we can navigate from the given url', function(done) {
        request.get('/webCrawler?url=https://wiprodigital.com/')
            .expect(200)
            .end(function(err, res) {
                expect(res.body.urls).to.have.length(74);
                done(err);
            });
    }).timeout(12000);
});