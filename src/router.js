import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      /* Changed component names to multiname to prevent any potential html elements */
      name: 'home-page',
      component: () => import(/* webpackChunckName: "about" */ './views/Home.vue')
    },
    {
      path: '/work',
      name: 'work-page',
      component: () => import(/* webpackChunkName: "about" */ './views/Work.vue')
    },
    {
      path: '/contact',
      name: 'contact-page',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    }
  ]
})
