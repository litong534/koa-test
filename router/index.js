const router = require('koa-router')();

const test = require('../api/test');
const test2 = require('../api/test2');

router.use('/api',test.routes());

router.use('/api2',test2.routes());



module.exports = router;
