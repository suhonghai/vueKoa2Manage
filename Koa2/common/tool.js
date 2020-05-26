const srypto = require('crypto')
const request = require('request')
module.exports = {
    //md5加密密码
    md5: (str) => {
        return srypto.createHash('md5').update(str).digest('hex');
    },
    //奖request包装成异步
    awaitRequest: (url) => {
        return new Promise((resolve, reject) => {
            request.get(url, (error, response, body) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(body)
                }
            })
        })
    },
    //判断是生产还是开发环境
    env: () => {
        return process.env.NODE_ENV || 'production'
    }
}