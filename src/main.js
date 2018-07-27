// 项目入口文件
import Vue from 'vue'
// 导入 vue-router 包
import VueRouter from 'vue-router'
// 为 Vue 安装 vue-router
Vue.use(VueRouter)


// 导入 axios 并挂载
import axios from 'axios'
// 配置全局的Ajax根路径
axios.defaults.baseURL = 'http://39.106.32.91:3000';
Vue.prototype.$http = axios


// 导入MintUI并导入样式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 为 Vue 安装 MintUI
Vue.use(MintUI)


// 导入美化MUI的样式表
import './lib/mui/css/mui.css'
// 导入 MUI 的扩展图标库
import './lib/mui/css/icons-extra.css'


// 导入根组件
import App from './components/App.vue'

// 导入自己封装的 路由模块
import router from './router.js'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router // 将路由挂载到 VM 实例上
})







// 大家在搭建项目结构的时候：
// 1. 先把 App.vue 根组件渲染出来