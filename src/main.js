import Vue from 'vue'

import ElementUI from 'element-ui'
import provide from './apollo';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n



import App from './App'
import router from './router'
import store from './store'
import apollo from './apollo'

import '@/icons' // icon
//import '@/permission' // permission control

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  provide,
  template: '<App/>',
  components: { App }
})
