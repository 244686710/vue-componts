const code =
`<template>
  <div>
    <input v-model="message">
    {{message}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message: ''
      }
    }
  }
</script>
<style>
  div {
    background-color: #ff0000
  }
</style>
`;

export default code;
