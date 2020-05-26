/*
 * @Descripttion:链接mysql数据库
 * @version:1.0
 * @Author: SueSea
 * @LastEditors: SueSea
 * @LastEditTime: 2020-03-23 16:30:23
 */
const mysql = require('mysql')
db = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'test'
});
module.exports = {
    queryFormMysql: (sql) => {
        return new Promise((resolve, reject) => {
            db.query(sql, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}