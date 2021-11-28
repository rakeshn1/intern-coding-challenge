const assert = require('assert');
const axios = require('axios');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const should = chai.should();

// declared to use in future test after login
let userInfo = {};
chai.use(chaiHttp);

describe('/GET all tickets from Zendesk', () => {
    it('it should GET all the tickets for given credentials', (done) => {
        chai.request(server)
            .get('/tickets/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(100);
                done();
            });
    });
});

