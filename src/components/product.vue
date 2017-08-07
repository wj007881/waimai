<template>
  <div >
       <ul>
       	<li>产品11</li>数量{{count}} 
		<mt-button type="primary" @click="mtButtonClick">+</mt-button> 
                 <mt-button type="primary" v-on:click="addTodo3()">添加菜品</mt-button><p>
		
       	<li>产品12</li>数量{{count}} 
		<mt-button type="primary" @click="mtButtonClick">+</mt-button> 
                 <mt-button type="primary" v-on:click="addTodo3()">添加菜品</mt-button><p>
		
       	<li>产品13</li>数量{{count}} 
		<mt-button type="primary" @click="mtButtonClick">+</mt-button> 
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
            }
        }

    }
</script>