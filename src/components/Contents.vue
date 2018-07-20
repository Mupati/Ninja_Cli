<template>
<div id="contents">
	<ul>
		<li v-for="writer in writers" v-on:click="writer.show = !writer.show">
				<h2>{{writer.name}}</h2>
				<h3 v-show="writer.show">{{writer.speciality}}</h3>
		</li>
	</ul>
	<button v-on:click="deleteWriter">Delete Writer</button>
</div>
</template>

<script>


export default {
  props:{
  		writers:{
  			type: Array,
  			required: true,
  		}
  	},

  data(){
 	return{
 	
 	}
  },

   methods:{
   		deleteWriter: function(){
   			this.writers.pop();
   		}
   },
  //life cycle hooks
  beforeCreate(){
  	alert("BeforeCreate");
  },

  created(){
  	alert("created");
  },

  beforeMount(){
  	alert("BeforeMount");
  },

  mounted(){
  	alert('mounted');
  },

  beforeUpdate(){
  	alert('beforeUpdate');
  },

  updated(){
  	alert('updated');
  }

}
</script>

<style scoped>
#contents{
	width: 100%;
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;

}

ul{
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;  
	padding: 0; 
}

li{
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
}
</style>
