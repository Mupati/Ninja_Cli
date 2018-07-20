<template>
	<div>
		<form-helper>
			<div slot="form-header">
				<h3>Form Two - Log In</h3>
				<p>Enter your details to log-in</p>
			</div>
			<div slot="form-fields">
				<input type="text" placeholder="username" required><br>
				<input type="password"  placeholder="password" required><br><br>
				<label>Your Message:</label><br>
				<textarea></textarea><br>
			</div>
			<div slot="form-controls">
				<button v-on:click="handleSubmit">Login</button>
			</div>
		</form-helper>
	</div>
</template>



<script>
import formHelper from './formHelper.vue'

export default{

	components:{
		'form-helper': formHelper
		
	},

	data(){
		return{

		}
	},

	methods:{
		handleSubmit: function(){
			alert('Thanks for logging in');
		}
	}
}

</script>

<style scoped>

/*form{
	margin: 5em auto;
	text-align: center;
}
*/
</style>