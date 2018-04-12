const router = require('koa-router')();
  router.get('/test', async (ctx, next) => {
    ctx.response.body = 'im test route';
    await next();
  });

module.exports = router;