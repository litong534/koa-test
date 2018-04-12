const responseHeader = async (ctx, next) => {
  ctx.set({
    "Access-Control-Allow-Origin": "http://www.baidu.com",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept,x-access-token",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    "X-Powered-By": "3.2.1",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json;charset=utf-8"
  });
  await next();
}

module.exports = responseHeader;