<template>
	<div v-theme:column="'wide'" id="show-blogs"  class="text-center p-3 m-3">  <!-- v-theme:column="'wide'"  -->
		<h2>All Blog Articles</h2>
		<input type="text" v-model="search" placeholder="search box">
		<div v-for="post in filteredPosts" class="mb-3 p-3" id="single-blog">
			<router-link v-bind:to="'/post/'+ post.id"><h3>{{post.heading | capitalize}}</h3></router-link>
			<article>{{post.para1}}</article>
			<article>{{post.para2}}</article>																																	
		</div>
	</div>
</template>

<script>

export default{

	data(){
		return{
			posts:[],
			search:'',
		}
	},

	methods:{

	},

	computed:{
		filteredPosts:function() {
			return this.posts.filter((post)=>{
				return post.heading.match(this.search) || post.para1.match(this.search) ;
			});
		}
	},

	/*filters:{
		'capitalize': function(value){
			return value + 'God is good';
		},

		capitalize(value){
			return 'Naneama';
		}
	},*/

/*	directives:{
		'rainbow':{
			bind(el, binding, vnode){
				el.style.color = "#" + Math.random().toString().slice(2,8);}
		}
	},
*/
	mounted(){
		var that = this;
		var details = { "service":"KHM", "table":"blog", params : {} 
				}
		SDK.queryData(details.service, details.table, details.params, function(data){
			  that.posts = data.payload.results;
		});
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