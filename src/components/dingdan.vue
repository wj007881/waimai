<template>
  <div id='dingdan'><mt-header fixed title="我的购物车"></mt-header>
   
<div v-for="shuzuf in  gearrf ">
       <ul>	
	<li>{{shuzuf.can3}}数量{{shuzuf.shu3}}<mt-button type="primary" v-on:click="remove($index)">删除菜品</mt-button></li>
       </ul>
</div> 
<div v-for="shuzu in  gearr ">
       <ul>	
	<li>{{shuzu.can}} 数量{{shuzu.shu}}<mt-button type="primary" v-on:click="remove($index)">删除菜品</mt-button></li>
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
	    value:'',
	    qqq:'',
	    www:'',
            }
        },
        computed:{
	    ...mapState({
                 gearrf: state=>state.shuzuf
            }),
	    ...mapState({
                 gearr: state=>state.shuzu
            })
           
           
        },
        methods:{
            ...mapMutations([
                'increment' ,// 映射 this.increment() 为 this.$store.commit('increment')
		'ge',
		'ge3'
            ]),
            ...mapActions([
                 'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
            ]),
            mtButtonClick(){
                this.increment();
            },
	    qwer:function(){
	    
	    alert('提交成功，请登录');
	    this.value='我的'
	    },
	    
            remove:function(index){
                this.gearr.splice(index,1)
            }
        }

    }
</script>