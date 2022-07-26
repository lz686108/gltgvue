/*
 * @Author: your name
 * @Date: 2021-01-26 10:03:19
 * @LastEditTime: 2021-03-01 08:41:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coordination\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        name: 'index',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/index.vue'),
        redirect: '/dc',
        children: [
            {
                path: '/list',
                name: 'list',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/list.vue'),
            }, {
                path: '/list1',
                name: 'list1',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/list1.vue'),
            }, {
                path: '/company',
                name: 'company',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/company.vue'),
            }, {
                path: '/dc',
                name: 'dc',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/dc.vue'),
            }, {
                path: '/clxx',
                name: 'clxx',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/clxx.vue'),
            }
            , {
                path: '/gyspj',
                name: 'gyspj',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/gyspj.vue'),
            }
            , {
                path: '/tgllfp',
                name: 'tgllfp',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/tgllfp.vue'),
            }
            , {
                path: '/yxjc',
                name: 'yxjc',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/yxjc.vue'),
            }
            , {
                path: '/sggk',
                name: 'sggk',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/sggk.vue'),
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/admin.vue'),
        redirect: '/table',
        children: [
            {
                path: '/table',
                name: 'table',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/table.vue'),
            }, {
                path: '/table1',
                name: 'table1',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/table1.vue'),
            }, {
                path: '/table2',
                name: 'table2',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/table2.vue'),
            }, {
                path: '/table3',
                name: 'table3',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/table3.vue'),
            },
            {
                path: '/Component_library',
                name: 'Component_library',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/Component_library.vue'),
            }, {
                path: '/test',
                name: 'test',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/test.vue'),
            }, {
                path: '/ce',
                name: 'ce',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/ce.vue'),
            },
        ]
    },

]


const router = new VueRouter({
    // mode: 'history',
    // base: '/company/',
    // base: process.env.BASE_URL,
    // hashbang: false,
    routes
})
// router.beforeEach((to, from, next) => {
//   // ...
//   // console.log(to);
//   if (sessionStorage.getItem('card') == null) {
//     let card = sessionStorage.getItem('card')
//     to.query.card = card
//   }

//   next()
// })

export default router
