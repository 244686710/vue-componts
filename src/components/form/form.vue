<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'iForm',
    mixins: [Emitter],
    props: {
      model: {
        type: Object
      },
      rules: {
        type: Object
      }
    },
    // 要拿到 Form 中 model 里的数据，
    // provide / inject。所以在 Form 中，
    // 把整个实例（this）向下提供，并在 FormItem 中注入：
    provide() {
      return {
        form: this
      }
    },
    created() {
      this.$on('on-form-item-add', (field) => {
        if (field) this.fields.push(field);
      });
      this.$on('on-form-item-remove', (field) => {
        if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
      });
    }
  }

</script>
