import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: resolve => require(['@/views/Login.vue'], resolve)
    }
]
export const dynamicRouter = [
    {
        path: '/home',
        name: 'Home',
        component: resolve => require(['@/views/Home.vue'], resolve)

    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(async (to, from, next) => {
    // 动态路由加载
    console.log(to)
    if (to.matched.length === 0) {
        router.addRoutes(dynamicRouter);
        next({ ...to, replace: true })
    } else {
        next()
    }
})


export default router

