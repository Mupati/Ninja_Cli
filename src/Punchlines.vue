<template>
<div>
<h1>Kingdom Punchliners</h1>
  <ul>
  	<li v-for="author in authors">{{author}}</li>
  </ul>
</div>
</template>

<script>
export default {

  data(){
    return {
      authors: ['Bra','Krox','Effectx','Paa','Kwesi']
      }
  },

}
</script>

<style scoped>
h1{
	color: rgb(33,23,222);
}

</style>
