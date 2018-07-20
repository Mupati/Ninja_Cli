<template>
  <div>
  <h1>{{title}}</h1>
  <punch></punch>

  </div>
</template>

<script>

import Punchlines from './Punchlines.vue';  

export default {
  components:{
    'punch': Punchlines
  },

  data(){
    return {
      title: 'Punchlines'
      }
  },

}
</script>

<style scoped>
h1{
  color: peach;
}
</style>
