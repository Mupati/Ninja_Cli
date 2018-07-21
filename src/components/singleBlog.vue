<template>
	<div class="p-5 mx-5 text-center" id="single-blog">
		<h3 class="pb-3">{{ post.heading}}</h3>
		<p>	
			<span>Author: {{post.author}}</span>
			<span>Date Published: {{post.postdate}}</span>
		 </p>
		<article>{{ post.para1 }}</article>
		<article>{{ post.para2 }}</article>
		<article>{{ post.para3 }}</article>
		<article>{{ post.para4 }}</article>
		<article>{{ post.para5 }}</article>
	</div>
</template>


<script>
export default{

	data(){
		return{
			id: this.$route.params.id,
			post:[]
		}
	},

	created(){
		var that = this;
		var details = { "service":"KHM", "table":"blog", params : { where:["id,"+this.id]} 
				}
		SDK.queryData(details.service, details.table, details.params, function(data){
			that.post = data.payload.results[0]; 
		});
	}

}

</script>
