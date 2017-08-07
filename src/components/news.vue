<template>
    <div >
     
       <ul v-for="caipin in liebiao">
       	<li>{{caipin.name}}</li>数量{{caipin.sl}} 
		<mt-button type="primary" @click="jia()">+</mt-button> 
                <mt-button type="primary" v-on:click="addTodo3()">添加菜品</mt-button><p>
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
                name:'',
		sl:1,
		topStatus: '',
		liebiao:[{
                    name: '产品07',
                    sl:1,
                    
                }, {
                    name: '产品08',
                   sl:1,
                   
                }, {
                    name: '产品09',
                    sl:1,
                  
                }, {
                    name: '产品10',
                    sl:1,
                   
                }],
                todos:[
                {text:'Add some todos'}
                ]
            }
        },
        computed:{
            ...mapState({
                 count: state => state.count
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
	    addTodo3:function(){
               this.$store.commit('ge3',{can3:this.liebiao[0]})
            },
	    jia:function(){
	       this.$store.commit('jia',{shu:this.liebiao.sl})
	    },
	    
	    
        }

    }
</script>