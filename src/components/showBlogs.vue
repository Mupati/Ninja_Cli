<template>
	<div v-theme:column="'wide'" id="show-blogs"  class="text-center p-3 m-3">
		<h2>All Blog Articles</h2>
		<input type="text" v-model="search" placeholder="search box">
		<div v-for="post in posts" class="mb-3 p-3" id="single-blog">
			<router-link v-bind:to="'/blog/'+ blog.id"><h3>{{post.title | capitalize}}</h3></router-link>
			
			<article>{{post.body.toLowerCase()}}</article>																																	
		</div>
	</div>
</template>

<script>
/*import Devless from 'devless-sdk';*/
var constants = {
        "token": "77c8a39846f93b49501bbcc05dff33af",
        "domain": "https://apoga-ent.herokuapp.com"
    };
/*var SDK = new Devless("https://apoga-ent.herokuapp.com","77c8a39846f93b49501bbcc05dff33af");*/
var SDK = new Devless(constants);

export default{

	data(){
		return{
			posts:[],
			search:'',
			service:'KHM',
			table:'blog',
			params:{
				where:["id,1"],
			}
		}
	},

	methods:{

	},

	computed:{
		filteredPosts:function() {
			return this.posts.filter((post)=>{
				return post.title.match(this.search);
			});
		}
	},

/*	filters:{
		'capitalize': function(value){
			return value + 'God is good';
		},

		capitalize(value){
			return 'Naneama';
		}
	},

	directives:{
		'rainbow':{
			bind(el, binding, vnode){
				el.style.color = "#" + Math.random().toString().slice(2,8);}
		}
	},*/

	created(){
		SDK.queryData(this.service, this.table, this.params, function(response){
			  this.posts = response.payload.results[0];
			});

		/*this.$http.get('http://localhost:4545/api/v1/service/KHM/db?table=contact','00c41647176ef85da6f9d75d88a6f343').then(function(data){
			console.log(data);
				/*this.posts = data.message;.slice(0,10);
				console.log(this.posts);
		})*/
	}
}
</script>


<style scoped>

body{
	margin: 0;
	font-family: 'Nunito SemiBold';
}

#single-blog{
	background: #eee;
}


</style>