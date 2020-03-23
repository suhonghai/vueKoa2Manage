module.exports = {
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    devServer: {
        open: true
    },
    // px2rem配置
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins: [
    //                 require('postcss-px2rem')({ remUnit: 30 }), // 换算的基数
    //             ]
    //         }
    //     }
    // },
    //配置自定义favico.ico
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
}
