import Vue from 'vue'
import App from './App'
import api from './common/api/index.js';
import store from './store/index.js';
Vue.prototype.$api = api;
import uView from "uview-ui";
Vue.use(uView);
//阿里图标
import './common/css/icon.css';

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
