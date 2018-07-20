<template>
<div>
  <app-header v-bind:title="title"></app-header> <!-- v-on:changeTitle="updateTitle($event)
" -->
  <app-contents v-bind:writers="writers"></app-contents>
  <app-footer v-bind:title="title"></app-footer>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Contents from './components/Contents.vue'

export default {

  components:{
    'app-header': Header,
    'app-contents': Contents,
    'app-footer': Footer,

  },

  data(){
 	return{
 			writers:[
 			{name:'Krox', speciality:'Satire', show:false},
 			{name:'Effectx', speciality:'Comedy', show:false},
 			{name:'Blood', speciality:'Tragedy', show:false},
 			{name:'Bought', speciality:'History', show:false},
 			{name:'Flame', speciality:'Rap', show:false},
 			{name:'Truth', speciality:'Allegory', show:false},
 		],

 		title: "Punchliners"
 	}
  },

  methods:{

  	updateTitle: function(updatedTitle) {
  		this.title = updatedTitle;
  	}


  }

}
</script>

<style>

</style>
