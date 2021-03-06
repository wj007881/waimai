import Vue from 'vue'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'; 
Vue.use(VueResource);


//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(MintUI);
Vue.use(Vuex)

import store from './vuex/store'
import top from './components/top.vue'
import news from './components/news.vue'
import product from './components/product.vue'
import about from './components/about.vue'
import sousuo from './components/sousuo.vue'
import dingdan from './components/dingdan.vue'
// 创建一个路由器实例并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      components:{top:top,about:about,news:news,},
	 },
		  {
      path:'/news',
      components:{top:top,news:news},

    },
		{
      path:'/about',
      components:{top:top,about:about},
	
    },
		{
      path:'/product',
      components:{top:top,product:product},
	
    },
		{
      path:'/dingdan',
      components:{dingdan:dingdan},
},
		{
      path:'/sousuo',
      components:{top:top,sousuo:sousuo},
},
	
    

  ]
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
      router: router,
      store,
     
      render: h => h(App)
}).$mount('#app')

