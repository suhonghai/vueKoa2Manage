## 项目创建

**1.koa-generator 创建 koa2**

> [koa-generator 参考地址](https://www.jianshu.com/p/1950c3e27618)

**2.vue-cli3.0 创建 vue 项目**

> [vue-cli3.0 参考网址](https://cli.vuejs.org/zh/guide/)

## 项目基础配置修改

**1.favicon.con 配置**

> 创建 vue.config.js,加入以下代码并更换 public 下面 favicon 图片为自己的图片

```javascript
pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
```

**2.热启动配置**

> vue.config.js 加入以下代码

```javascript
devServer: {
	open: true
}
```

**3.是否在保存的时候检查代码**

> vue.config.js 加入以下代码

```javascript
lintOnSave: true
```

**4.reset.css 重置样式**

> [参考网站（复制放在自己代码中）]("https://meyerweb.com/eric/tools/css/reset/")
