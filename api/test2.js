const router = require('koa-router')();
router.get('/test2', async (ctx, next) => {
  ctx.response.body = 'im test route';
  await next();
});

module.exports = router;