<template><div>
   <div id="main">
     <mt-search v-model="value">
     <mt-cell v-for="caipin in liebiao":title="caipin.name":value="caipin.sl">
  </mt-cell>
</mt-search>
 
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