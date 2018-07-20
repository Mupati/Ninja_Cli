<template>
	<div>
		<keep-alive>
		<component v-bind:is="component"></component>
	    </keep-alive>
		<br><br>
		<hr>
		<br><br>
		<button @click="showFormOne">FormOne</button>
		<button @click="showFormTwo">FormTwo</button>
		<!-- <form-helper>
			<div slot="form-header">
				<h3>Sign Up</h3>
				<p>Fill the form Below</p>
				
			</div>

			<div slot="form-fields">
				<input type="text" placeholder="name" required><br>
				<input type="password" placeholder="password" required>
				
			</div>

			<div slot="form-controls">
				<button v-on:click="handleSubmit">Submit</button>
			</div>
		</form-helper> -->
	</div>
</template>



<script>

import formHelper from './components/formHelper.vue'
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'


export default{

	components:{
		'form-helper': formHelper,
		'form-one': formOne,
		'form-two': formTwo 
	},

	data(){
		return{
			component: 'form-two'
		}
	},

	methods:{

		showFormOne: function(){
			this.component = 'form-one';
		},

		showFormTwo: function() {
			this.component = 'form-two';
		},

		handleSubmit: function(){
			
		}
	}
}

</script>

<style scoped>


</style>