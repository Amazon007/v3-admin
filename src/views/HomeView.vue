<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { testApi } from '@/api/test'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    testApi({
      param1: 'stejr',
      param2: 4249239
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    return {
      
    }
  }
};
</script>
