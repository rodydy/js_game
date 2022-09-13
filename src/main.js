import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"
import "@/styles/reset.css"
import router from '@/router'

import {
  Tabbar, TabbarItem, NavBar,
  Col, Row, Image as vanImage,
  Cell, Icon,Search
} 
from 'vant';


Vue.use(NavBar);
Vue.use(Search);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(vanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
