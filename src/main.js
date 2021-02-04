import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/index'
import "./assets/styles/styles.scss";


Vue.config.productionTip = false
Vue.config.devtools = true


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
