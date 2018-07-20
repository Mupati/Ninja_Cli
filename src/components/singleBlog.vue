<template>
	<div id="single-blog">
		<h3>{{ blog.title | capitalize }}</h3>
		<article>{{ blog.body }}</article>
	</div>
</template>


<script>
export default{

	data(){
		return{
			id: this.$route.params.id,
			blog:{}
		}
	},

	created(){
		this.$http.get('http://jsonplaceholder.typicode.com/posts/'+ this.id).then(function(){
			this.blog = data.body;
		});
	}



}

</script>