<template>
    <div id="main">

        <nav>
            <a v-for="(items,index) in items" v-bind:class="{show:items.active}"
               v-on:click="makeActive(items,index)" >{{items.name}}</a>
        </nav>


    </div>

</template>
<script>
    export default {
        data(){
            return {
                items: [
                    {name: '本店主打', active: true},
                    {name: '快餐美食', active: false},
                    {name: '小食饮料', active: false},
                    {name: '下午茶夜宵', active: false},
		    {name: '搜索', active: false}
                ]
            }
        },
        methods: {
            makeActive: function(item, index){
                this.active = item.name;
                for(var i=0; i<this.items.length;i++){
                    this.items[i].active = false;
                    this.items[i].over = false;
                }

                this.items[index].active = true;
                switch(index){
                    case 0:
                        this.$router.push('/');
                        break;
                    case 1:
		     this.$router.push('/about');
                        break;
                    case 2:
		     this.$router.push('/news');
                        break;
                    case 3:
		     this.$router.push('/product');
                       break;
		    case 4:
		     this.$router.push('/sousuo');
                       break;
		    
                }
            }
        }

    }
</script>
<style>
    nav{
        display:inline-block;
        margin:60px auto 45px;
        background-color:#5597b4;
        box-shadow:0 1px 1px #ccc;
        border-radius:2px;
    }
    nav a{
        display:inline-block;
        padding: 18px 30px;
        color:#fff;
        font-weight:bold;
        font-size:16px;
        cursor:pointer;
    }
    b{
        display:inline-block;
        padding:5px 10px;
        background-color:#c4d7e0;
        border-radius:2px;
        font-size:18px;
    }
    .show{
        background-color:#e35885;
    }


</style>
