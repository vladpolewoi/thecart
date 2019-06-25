import Vue from 'vue'
import App from './App.vue'
import store from './store'
import filters from './filters/main'
import { ModalPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;

Vue.use(ModalPlugin)

for (let name in filters) {
  Vue.filter(name, filters[name])
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
