<template>
   <div >
     <div>
       <ul>
       	<li>{{can}}</li>数量{{shu}} 

		<mt-button type="primary" @click="mtButtonClick">+</mt-button> 
                 <mt-button type="primary" v-on:click="addTodo()">添加菜品</mt-button><p>
       </ul>
        <ul>
       	<li>{{can2}}</li>数量{{shu2}} 
		<mt-button type="primary" @click="jia(shu2)">+</mt-button> 
                 <mt-button type="primary" v-on:click="addTodo2()">添加菜品</mt-button><p>
       </ul>
       
     

    <ul v-for="caipin in liebiao">
       	<li>{{caipin.name}}</li>数量{{caipin.sl}} 
		<mt-button type="primary" @click="jia()">+</mt-button> 
                 <mt-button type="primary" v-on:click="addTodo3()">添加菜品</mt-button><p>
       </ul>
    
 </div>
 
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
	        can:'实验品1',
		shu:1,
		can2:'实验品2',
		shu2:1,
		name:'',
		sl:1,
		liebiao:[{
                    name: '产品01',
                    sl:1,
                    
                }, {
                    name: '产品02',
                   sl:1,
                   
                }, {
                    name: '产品03',
                    sl:1,
                  
                }, {
                    name: '产品04',
                    sl:1,
                   
                }, {
                    name: '产品05',
                    sl:1,
                   
                }, {
                    name: '产品06',
                    sl:1,
                   
                }, {
                    name: '产品07',
                    sl:1,
                   
                }],
                todos:[
                {text:'Add some todos'}
                ]
            }
        },
        computed:{
            ...mapState({
                 shu: state => state.shu,
		 shu2:state=>state.shu2,
            }),
           
        },
        methods:{
            ...mapMutations([
                'increment' ,// 映射 this.increment() 为 this.$store.commit('increment')
            ]),
            ...mapActions([
                 'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
            ]),
            mtButtonClick(){
                this.increment();
            },
	    addTodo:function(){
               this.$store.commit('ge',{can:this.can,shu:this.shu})
            },
	    addTodo2:function(){
               this.$store.commit('ge2',{can2:this.can2,shu2:this.shu2})
            },
	    addTodo3:function(){
               this.$store.commit('ge3',{can3:this.liebiao[0]})
            },
	    jia:function(){
	       this.$store.commit('jia',{shu2:this.shu2})
	    }
	   
        }

    }
</script>