import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/detail/:id',  //动态路由 动态参数为 id
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }],
    // 每次做路由切换时，让新显示的页面回到最顶部
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0}
    }
})
