<template>
    <div>
        
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
	    articles:[],
            todos:[
                {text:'Add some todos'}
            ]
            }
        },mounted: function() {
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
            }
        }

    }

</script>
<style>
</style>