<template>
  <div id="app">
   <router-view></router-view>
   <ul>
    <router-link to="/formTest">表单组件测试</router-link> <br>
    <router-link to="/findComponents">自定义findComponents验证</router-link><br>
    <router-link to="/display">dispaly</router-link><br>
    <router-link to="/alert">弹框组件测试</router-link>
   </ul>
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
</style>
