<template>
<div  class="pt-5" id="add-blog">
		<h2 class="text-muted">Add a New Blog Post</h2>

		<form v-if="!blog.submitted">
			<label>Blog Title:</label>
			<input type="text" v-model.lazy="blog.title" required>
			<br>
			<label>Blog Content:</label>
			<br>
			<textarea v-model.lazy="blog.content"></textarea>
			<div id="checkboxes">
				<label>Music</label>
				<input type="checkbox" value="MuSIc" v-model="blog.categories">

				<label>Gospel</label>
				<input type="checkbox" value="gospel" v-model="blog.categories">

				<label>Church</label>
				<input type="checkbox" value="church" v-model="blog.categories">

				<label>Career</label>
				<input type="checkbox" value="career" v-model="blog.categories">
			</div>
			<br>
			<div id="author">
				<p>Author:</p>
				<select v-model="blog.author">
					<option></option>
					<option>Bra Krox Effectx</option>
					<option>Bra Blood Bought</option>
					<option>Cross Punchliner</option>
					<option>Swedru Conqueror</option>
				</select>
			</div>
			<button v-on:click.prevent="post">Add Blog</button>	
		</form>

		<div v-if="blog.submitted">
			<h4>Thanks for Adding Your Posts</h4>
		</div>
		
		<div id="preview">
			<h3>Preview Blog</h3>
			<p>Blog title: {{ blog.title }}</p>
			<p>Blog content: </p>
			<p>{{ blog.content }}</p>
			<p>Blog categories: <span v-for="category in blog.categories"> {{ category | capitalize }} </span></p>
			<p>Author: {{blog.author}}</p>

		</div>
	</div>
</template>

<script>

export default{

	data(){
		return{
			
			blog:{
				title:'',
				content: '',
				categories: [],
				author:'',
				submitted: false
			}
		}
	},

	methods:{

		post:function(){
			this.$http.post('https://jsonplaceholder.typicode.com/posts',{
				title: this.blog.title,
				body: this.blog.content,
				user_id: 1,
			}).then(function(data){
				console.log(data);
				this.blog.submitted = true;
			}); 
		}

	}
}

</script>

<style>
#add-blog *{
	box-sizing: border-box;
}

#add-blog{
	margin: 20px auto;
	max-width: 500px;
}

label{
	display: block;
	margin: 20px 0 10px;
}

input[type="text"], textarea{
	display: block;
	width: 100%;
	padding: 8px;
}

#preview{
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}

h3{
	margin-top: 10px;
}

#checkboxes label{
	display: inline-block;
	
}

#checkboxes input{
	margin-right: 5px;
}

</style>