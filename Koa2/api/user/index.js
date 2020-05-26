/*
 * @Descripttion: 
 * @version: 
 * @Author: SueSea
 * @LastEditors: SueSea
 * @LastEditTime: 2020-03-27 18:37:55
 */


const mysqlJs = require('../../common/mysql.js');
const tool = require('../../common/tool.js');

class user {
    async login (ctx, next) {
        try {
            let res;
            let last_login_time = new Date().getTime();
            let username = ctx.request.body.username;
            let password = tool.md5(ctx.request.body.password);
            let userInfo = await mysqlJs.queryFormMysql(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`);
            if (userInfo && userInfo.length === 1 && userInfo[0].is_deleted == 1 && userInfo[0].status == 1) {
                let uid = JSON.parse(JSON.stringify(userInfo))[0].uid;
                await mysqlJs.queryFormMysql(`UPDATE users SET last_login_time = '${last_login_time}' WHERE uid = '${uid}'`);
                res = {
                    status: 200,
                    result: 'ok',
                    message: '登录成功',
                    data: userInfo[0]
                }
            } else if (userInfo && userInfo.length === 1 && userInfo[0].is_deleted == 0) {
                res = {
                    status: 201,
                    result: 'fail',

                    message: '该帐号已被注销，请重新注册'
                }
            } else if (userInfo && userInfo.length === 1 && userInfo[0].status == 0) {
                res = {
                    status: 201,
                    result: 'fail',

                    message: '该帐号已被禁用，请联系管理员解封'
                }
            } else {
                res = {
                    status: 201,
                    result: 'fail',

                    message: '帐号或密码错误，请重试'
                }
            }
            return ctx.body = res;
        } catch (error) {
            console.log(error)
        }
    }
    async regist (ctx, next) {
        try {
            let res;
            let register_time = new Date().getTime();
            let username = ctx.request.body.username;
            let password = tool.md5(ctx.request.body.password);
            let is_exist = await mysqlJs.queryFormMysql(`SELECT * FROM users WHERE username = '${username}'`);
            if (is_exist && is_exist.length > 0) {
                res = {
                    status: 201,
                    result: 'fail',
                    message: '该用户名已被注册'
                }
                return ctx.body = res;
            } else {
                let insertUser = await mysqlJs.queryFormMysql(`INSERT INTO users (username,password,register_time) VALUES ('${username}','${password}','${register_time}')`);
                let userInfo = await mysqlJs.queryFormMysql(`SELECT * FROM users WHERE uid = ${insertUser.insertId}`);
                if (!insertUser) {
                    res = {
                        status: 201,
                        result: 'fail',
                        message: '注册失败，请稍候重试'
                    }
                } else {
                    res = {
                        status: 200,
                        result: 'ok',
                        message: '注册成功',
                        data: userInfo[0]
                    }
                }
                return ctx.body = res;
            }
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = new user();