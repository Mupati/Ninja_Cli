<template>
<header>
	<h1 v-on:click="changeTitle">{{title}}</h1>
</header>
</template>

<script>
import {bus} from '../main'

export default {
  props:{
  	title:{
  		type: String
  	}

  },

  data(){
 	return{
 		/*title: 'Punchlines'*/
 	}
  },

  methods:{

  	changeTitle: function(){
  		this.title = "Legend Like Tyson";
  		bus.$emit('titleChanged','Legend Like Tyson');
  		/*this.$emit('changeTitle','Boss Major Lee');*/
  		/*this.title = "Krox Kingdom";*/
  	}
  }

}
</script>

<style scoped>
header{
	background: lightgreen;
	padding: 10px;
}

h1{
	color: #222;
	text-align: center;
}
</style>
