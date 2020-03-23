const router = require('koa-router')()
const user = require('../api/user/index.js')

router
    .get('/', user.test)
    .get('/string', user.string)
    .get('/json', user.json)

module.exports = router
