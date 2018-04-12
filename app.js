const Koa = require('koa');
const kJson = require('koa-json');
const app = new Koa();
const router = require('./router/index');
const bodyParser = require('koa-bodyparser');
const resHeader = require('./middleware/responseHeader');
app.use(kJson());
app.use(resHeader);
app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
});
app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);

});
// add url-route:
router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
  var name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
  }
});

router.get('/testjson', async (ctx, next) => {
  console.log(ctx.query);
  ctx.body = {data: 123};
  await next();
});

// add router middleware:
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');