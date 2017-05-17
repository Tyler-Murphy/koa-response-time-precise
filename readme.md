Based on https://github.com/koajs/response-time.

# Install

```
npm install --save koa-response-time-precise
```

# Use

```javascript
const koa = require('koa');
const responseTime = require('koa-response-time-precise');

const app = koa();
app.use(responseTime());
app.listen(8080);
```

# Result

A header with response time accurate to 0.001 milliseconds is added.

```
HTTP/1.1 404 Not Found
X-Response-Time: 0.026ms
Content-Type: text/plain; charset=utf-8
Content-Length: 9
Date: Fri, 25 Mar 2016 01:14:40 GMT
Connection: keep-alive
```