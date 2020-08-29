import Vue from 'vue'
import App from './App'
import store from './store'
import dayjs from 'dayjs'
import {request, upload} from './utils/request.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$request = request
Vue.prototype.$upload = upload

// 引入时间时间处理库
Vue.prototype.$dayjs = dayjs

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
