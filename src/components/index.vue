<template>
    <div>
	<mt-header fixed title="我的信息"></mt-header>
	<div v-bind:class="{'class-a':isB,'class-b':isA}">
		<mt-field label="用户名" placeholder="请输入您的用户名" v-model="qqq"></mt-field>
		<mt-field label="邮箱" placeholder="请输入您的邮箱"  type="email" v-model="www"></mt-field>
		<mt-field label="手机" placeholder="请输入您的手机"  type="tel" v-model="eee"></mt-field>
		<mt-field label="生日" placeholder="请输入您的生日"  type="date" v-model="rrr"></mt-field>
		<mt-field label="自我介绍" placeholder="请输入您的自我介绍" v-model="aaa" type="textarea" rows="4"></mt-field>
		<mt-button type="primary" v-on:click="bc">保存并查看我的信息</mt-button><p>
		
	 
	</div>
	
         
	 <mt-popup v-model="isB" popup-transition="popup-fade">
                <mt-cell title="用户名" is-link >{{qqq}}</mt-cell>
	        <mt-cell title="邮箱" is-link >{{www}}</mt-cell>
	        <mt-cell title="手机" is-link >{{eee}}</mt-cell>
	        <mt-cell title="生日" is-link >{{rrr}}</mt-cell>
	        <mt-cell title="自我介绍" is-link >{{aaa}}</mt-cell>
	        <mt-cell ><mt-button type="primary" v-on:click="fh">返回并清空我的信息</mt-button><p></mt-cell>
         </mt-popup>
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        data () {
	            
            return {
	    qqq:'',
	    www:'',
	    eee:'',
	    rrr:'',
	    aaa:'',
	    isA:true,
	    isB:false,
	    articles:[],
            todos:[
                {text:'Add some todos'}
            ]
            }
        },
	mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  },
        computed:{
            ...mapState({
                 count: state => state.count
            }),
            ...mapGetters({
                    doneCount: 'doneTodosCount'
            })
        },
        methods:{
            ...mapMutations([
                'increment' ,// 映射 this.increment() 为 this.$store.commit('increment'
            ]),
            ...mapActions([
                 'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
            ]),
            mtButtonClick(){
                this.increment();
            },
	    addTodo:function(){
                var text = this.newTodo.trim()
                if(text){
                    this.todos.push({text:text})
                    this.newTodo = ''
                }
            },
            removeTodo:function(index){
                this.todos.splice(index,1)
            },
	    bc:function(){
		this.isA=false;
		this.isB=true;
	    },
	    fh:function(){
		this.isB=false;
		this.isA=true;
		this.qqq='';
	        this.www='';
	        this.eee='';
	        this.rrr='';
	        this.aaa='';
	    }
        }

    }

</script>
<style>
.class-a{
	display:none;
}
.class-b{
	display:block;
}
@component-namespace page {
    @component actionsheet {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);

        button:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>