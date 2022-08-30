<template>
  <div class="home">
    <div>数据： {{result}}</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { testApi } from '@/api/test'
import { reactive } from 'vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const result = reactive({})
    testApi({
      modules: 'statisGradeCityDetail,diseaseh5Shelf'
    }).then(res => {
      console.log(res)
      if (res.status === 200) {
        Object.assign(result, res.data.data)
      }
    }).catch(err => {
      console.log(err)
    })
    return {
      result
    }
  }
};
</script>
