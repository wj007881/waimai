<template>
  <div id="app">
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="首页">

	 <router-view name="top"></router-view>
	 <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1"><img src="./assets/11.jpg" style='height:300px;width:500px'></mt-swipe-item>
      <mt-swipe-item class="slide1"><img src="./assets/12.jpg" style='height:300px;width:500px'></mt-swipe-item>
      <mt-swipe-item class="slide1"><img src="./assets/13.jpg" style='height:300px;width:500px'></mt-swipe-item>
         </mt-swipe>
         <router-view name="about"></router-view>
	 <router-view name="news"></router-view>
         <router-view name="product"></router-view>
	 <router-view name="sousuo"></router-view>
	 
	 
        </mt-tab-container-item>     
        <mt-tab-container-item id="订单">
          <dingdan> </dingdan><mt-button type="primary" v-on:click="qq()">继续添加</mt-button>
	  <mt-button type="primary" v-on:click="qwer()">提交订单</mt-button><p>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <index></index>


        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/tb.png">
        首页
      </mt-tab-item>
     
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/tb.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/tb.png">
        我的
      </mt-tab-item>
      
    </mt-tabbar>
  </div>
</template>

<script>
  import index from './components/index.vue'
  import dingdan from './components/dingdan.vue'

  export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:"首页"
    }
  },
  methods: {
    startHacking () {
      this.$toast('It Works!')
    },
    qq(){
    this.selected="首页"
    },
    qwer:function(){
	    
	    alert('提交成功，请登录');
	    this.selected='我的'
	    },
  },
  components: { index,dingdan,}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.mint-swipe {
        height: 300px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

.mint-swipe-item {
        line-height: 200px;
      }

.slide1 {
        background-color: #fff;
        color: #fff;
      }



</style>
