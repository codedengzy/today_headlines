import '@/assets/rem'
import '@/assets/resetVant.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Button, Col, Row, Search, Tab, Tabs,
  Tabbar, TabbarItem, Popup, NavBar, Icon, Field
} from 'vant';

Vue.use(Button).use(Col).use(Row).use(Search)
  .use(Tab).use(Tabs).use(Tabbar).use(TabbarItem)
  .use(Popup).use(NavBar).use(Icon).use(Field);

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = '/api';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
