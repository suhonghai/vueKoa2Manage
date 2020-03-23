/*
 * @Descripttion: 
 * @version: 
 * @Author: SueSea
 * @LastEditors: SueSea
 * @LastEditTime: 2020-03-23 16:31:30
 */
const mysql = require()
class user {
    async test (ctx, next) {
        ctx.body = 'this is a users test!'
    }
    async string (ctx, next) {
        ctx.body = 'this is a users string!'
    }
    async json (ctx, next) {
        ctx.body = 'this is a users json!'
    }
}
module.exports = new user();