import Vue from 'vue'
import App from './App'
import HTTPFunction from "./util/http.js"

import head from './components/head/head.vue'
import searchBox from './components/search/search.vue'

//注册全局头部header
Vue.component("page-head",head);
//注册搜索框
Vue.component("searchBox",searchBox);
Vue.config.productionTip = false
Vue.prototype.http = HTTPFunction;



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
