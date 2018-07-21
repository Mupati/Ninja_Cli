<template>
<div  class="pt-5" id="add-blog">
		<h2 class="text-muted">Add a New Blog Post</h2>

		<form v-if="!blog.submitted">
			<label>Blog Title:</label>
			<input type="text" v-model.lazy="blog.heading" required>
			<br>
			<label>Blog Content:</label>
			<br>
			<textarea v-model.lazy="blog.contents.para1"></textarea>
			<textarea v-model.lazy="blog.contents.para2"></textarea>
			<textarea v-model.lazy="blog.contents.para3"></textarea>
			<textarea v-model.lazy="blog.contents.para4"></textarea>
			<textarea v-model.lazy="blog.contents.para5"></textarea>
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
			<hr>
			<button v-on:click.prevent="post">Add Blog</button>	
		</form>

		<div v-if="blog.submitted">
			<h4>Thanks for Adding Your Posts</h4>
		</div>
		
		<div id="preview">
			<h3>Preview Blog</h3>
			<p>Blog title: {{ blog.heading }}</p>
			<p>Blog content: </p>
			<p>{{ blog.contents.para1 }}</p>
			<p>{{ blog.contents.para2 }}</p>
			<p>{{ blog.contents.para3 }}</p>
			<p>{{ blog.contents.para4 }}</p>
			<p>{{ blog.contents.para5 }}</p>

			<p>Blog categories: <span v-for="category in blog.categories"> {{ category | capitalize }} </span></p>
			<p>Author: {{blog.author}}</p>
			<p>Date Published: {{ todayDate }}</p>

		</div>
	</div>
</template>

<script>

export default{

	data(){
		return{
			
			blog:{
				heading:'',
				author: '',
				contents: [],
				categories:[],
				submitted: false
			}
		}
	},

	methods:{

		post:function(){
			var that = this
			var details = {
				"service" : "KHM",
				"table" : "blog"
			};

			var data = {
				'postdate' : that.todayDate,
				'author' : that.blog.author,
				'heading': that.blog.heading,
				'para1': that.blog.contents.para1,
				'para2': that.blog.contents.para2,
				'para3': that.blog.contents.para3,
				'para4': that.blog.contents.para4,
				'para5': that.blog.contents.para5,
			}

			SDK.addData(details.service, details.table, data, function(response){
					that.blog.submitted = true;
			});
		}

	},

	computed: {

		todayDate: function(){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			if(dd < 10){
				dd = '0'+dd;
			}
			if(mm < 10){
				mm = '0'+mm;
			}
			return dd+'-'+mm+'-'+yyyy;

		},

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