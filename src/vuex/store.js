import Vue  from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
		can:'实验品1',
		shu:1,
		can2:'实验品2',
		shu2:1,
        name:'',
        sl:1,
		shuzu:[],
		shuzuf:[],
        
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        }

    },
    mutations: {
        increment (state) {
            state.shu++
        },
				ge:function(state,obj){
                     state.can=obj.can;
					 state.shu=obj.shu;
					 state.shuzu.push({can:state.can,shu:state.shu});
						 state.can='';
						 state.shu=1;
			},
				ge2:function(state,obj){
                     state.can2=obj.can2;
					 state.shu2=obj.shu2;
					 state.shuzu.push({can:state.can2,shu:state.shu2});
						state.can2='';
						state.shu2=1;
			},
				ge3:function(state,obj){
                     state.name=obj.can3.name;
					 state.sl=obj.can3.sl;
					 state.shuzuf.push({can3:state.name,shu3:state.sl});
			},
				jia:function(state){
				state.shu2++
			}
    },
    actions: {
        increment ({ commit }) {
            commit('increment')
        }
    }
})
