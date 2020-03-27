/*
 * @Descripttion: 
 * @version: 
 * @Author: SueSea
 * @LastEditors: SueSea
 * @LastEditTime: 2020-03-27 18:36:11
 */
const router = require('koa-router')()
const user = require('../api/user/index.js')

router
    .get('/', user.test)
    .get('/string', user.string)
    .get('/json', user.json)
    .post('/login', user.login)

module.exports = router
