import Vue from 'vue'
import App from './App'
import api from './common/api/index.js';
Vue.prototype.$api = api;
import uView from "uview-ui";
Vue.use(uView);
//阿里图标
import './common/css/icon.css';

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
