<template>
	<div>
		<app-header></app-header>
		<router-view></router-view>
		<!-- <add-blog></add-blog>
		<br>
		<hr>
		<show-blogs></show-blogs> -->
	</div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import header from './components/header.vue';




export default{
	components:{
		'add-blog': addBlog,
		'show-blogs': showBlogs,
		'app-header': header
	},

	data(){
		return{

		}
	},

	methods:{

	}
}
</script>


<style scoped>

body{
	margin: 0;
	font-family: 'Nunito SemiBold';
}


</style>