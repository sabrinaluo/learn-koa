'use strict';

const koa = require('koa');

const app = koa();

// x-response-time
app.use(function *(next) {
  let start = new Date();
  yield next;
  let ms = new Date() - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next) {
  let start = new Date();
  yield next;
  let ms = new Date() - start;
  console.log('%s %s - %sms', this.method, this.url, ms);
});

// response
app.use(function * () {
  this.body = 'Hello World';
});

app.listen(3000);
console.log('app is listen on port: 3000');
