<!-- component-b.vue -->
<template>
  <div>
    组件 B
  </div>
</template>
<script>
  import {
    findComponentUpward,
    findBrothersComponents
  } from '../utils/assist.js';

  export default {
    name: 'componentB',
    data () {
      return {
        name: 'Yuyd'
      }
    },
    mounted () {
      const comA = findComponentUpward(this, 'componentA');

      if (comA) {
        console.log(comA.name);  // Aresn
        comA.sayHello();  // Hello, Vue.js
      }

      const comBs = findBrothersComponents(this, 'componentB');
      console.log(comBs)
    },

    methods: {
      sayHello () {
        console.log('Hello vue.js')
      }
    }
  }
</script>
