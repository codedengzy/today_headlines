import Vue from 'vue'
import VueRouter from 'vue-router'
import indexWrap from '../views/indexWrap.vue'
import playWrap from '../views/playWrap.vue'
import cinemaWrap from '../views/cinemaWrap.vue'
import login from '../views/login.vue'
import userCenter from '../views/userCenter.vue'
import testWrap from '../views/testWrap.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'indexWrap',
    component: indexWrap
  },
  {
    path: '/playWrap',
    name: 'playWrap',
    component: playWrap
  },
  {
    path: '/cinemaWrap',
    name: 'cinemaWrap',
    component: cinemaWrap
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: userCenter
  },
  {
    path: '/testWrap',
    name: 'testWrap',
    component: testWrap
  }
]

const router = new VueRouter({
  routes
})

export default router
