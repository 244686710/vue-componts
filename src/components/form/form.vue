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
    data () {
      return {
        fields: []
      }
    },
    methods: {
      // 公开方法： 全部重置数据
      resetFields() {
        this.fields.forEach(filed => {
          filed.resetFields()
        })
      },
      // 公开方法： 全部校验数据，支持 Promise
      validate (callback) {
        return new Promise(resolve => {
          let valid = true;
          let count = 0;
          this.fields.forEach(field => {
            field.validate('', errors => {
              if (errors) {
                valid = false;
              }
              if(++count === this.fields.length) {
                // 全部完成
                resolve(valid);
                if(typeof callback === 'function') {
                  callback(valid)
                }
              }
            })
          })
        })
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
