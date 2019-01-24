<template>
  <div>

  </div>
</template>
<script>
  import TreeNode from './node.vue';
  import { deepCopy } from '../../utils/assist.js';
  export default {
    name: 'tree',
    components: { TreeNode },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      showCheckbox: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        cloneData: []
      }
    },
    created () {
      this.rebuildData();
    },
    watch: {
      data () {
        this.rebuildData();
      }
    },
    methods: {
      rebuildData () {
        this.cloneData = deepCopy(this.data);
      },
      emitEvent (eventName, data) {
        this.$emit(eventName, data, this.cloneData);
      }
    }
  }
</script>
