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
    .post('/login', user.login)
    .post('/regist', user.regist)

module.exports = router
