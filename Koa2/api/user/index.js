/*
 * @Descripttion: 
 * @version: 
 * @Author: SueSea
 * @LastEditors: SueSea
 * @LastEditTime: 2020-03-27 18:37:55
 */
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
    async login (ctx, next) {
        console.log("111111" + ctx.request.body.user)
        ctx.body = {
            status: 200,
            message: '登录成功',
            data: {
                name: 'admin'
            }
        }
    }
}
module.exports = new user();