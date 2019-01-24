<template>
  <div id="app">
   <router-view></router-view>
   <div class="links">
    <router-link class="link" to="/formTest">表单组件测试</router-link>
    <router-link  class="link" to="/findComponents">自定义findComponents验证</router-link>
    <router-link  class="link" to="/display">dispaly</router-link>
    <router-link  class="link" to="/alert">弹框组件测试</router-link>
    <router-link  class="link" to="/table-render">table-render</router-link>
    <router-link  class="link" to="/table-slot">table-slot</router-link>
    <router-link  class="link" to="/next-tick">nextTick</router-link>
   </div>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: blue
}
.links {
  margin-top: 30px;
  padding-top: 20px;
  text-align: center;
}
.link {
  display: inline-block;
  padding: 5px 10px;
  height: 20px;
  line-height: 20px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 #ddd
}
</style>
