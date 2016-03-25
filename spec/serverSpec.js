'use strict';
const http = require('http');
const request = require('request-promise');
const responseTime = require('../index.js');
const app = require('koa')();
let server;

const host = '127.0.0.1';
const port = '8080';

app.use(responseTime())
server = http.createServer(app.callback());

describe('responseTime', () => {
    let head = request.defaults({
        method: 'HEAD',
        uri: `http://${host}:${port}`,
        simple: false
    });

    beforeAll(done => server.listen(port, host, done));
    afterAll(done => server.close(done));

    it('adds an X-Response-Time header', done => {
        head()
        .then(headers => expect(headers['x-response-time']).toBeDefined())
        .catch(this.fail)
        .finally(done);
    });

    it('has microsecond precision', done => {
        head()
        .then(headers => headers['x-response-time'])
        .then(time => expect(time).toMatch(/\d+\.\d{3}ms/))
        .catch(this.fail)
        .finally(done);
    });
});