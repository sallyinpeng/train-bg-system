import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home/Home.vue'
import Mall from '../views/Mall/Mall.vue'
import User from '../views/User/User.vue'
// import Search from '../components/Search.vue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
        // component: () => import('../views/Home/Home.vue')
      }, {
        path: '/mall',
        name: 'mall',
        component: Mall
        // component: () => import('../views/Mall/Mall.vue')
      }, {
        path: '/user',
        name: 'user',
        component: User
        // component: () => import('../views/User/User.vue')
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    // component: Search
    component: () => import('../components/Search.vue.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 出现'/'冗余路由报错，添加以下说明
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
