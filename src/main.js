import Vue from 'vue'
import VueECharts from 'vue-echarts'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts.js'
import * as ECharts from 'echarts'
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueECharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
