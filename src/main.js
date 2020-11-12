// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**入口文件 */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { Button } from 'mint-ui'

import './mock/mockServer' //加载mockServer即可

// 注册全局组件标签
Vue.component(Button.name,Button)   //mt-button标签就可以使用了
// 注册store
import store from './store'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

import Vant,{Lazyload} from 'vant';

import loading from './components/imgs/11.jpg'
import './filters' //加载过滤器
// options 为可选参数，无则不传
Vue.use(Lazyload,{ //内部自定义一个指定lazy 
  loading
})
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
 render:h=>h(App),
 store
})
