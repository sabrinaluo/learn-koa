const koa = require('koa');

const app = koa();

app.use(function * () {
  this.body = 'Hello World';
});

app.listen(3000);
console.log('app is listen on port: 3000');
