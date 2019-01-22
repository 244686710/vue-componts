<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// 代码很容易理解，需要介绍的就是 updateModel 方法。
// 可以看到，一共有 3 个地方调用了 updateModel，其中两个是 CheckboxGroup
// 的 mounted 初始化和 watch 监听的 value 变化时调用；另一个是在 Checkbox
// 里的 mounted 初始化时调用。这个方法的作用就是在 CheckboxGroup 里通过
// findComponentsDownward 方法找到所有的 Checkbox，
// 然后把 CheckboxGroup 的 value，赋值给 Checkbox 的 model，
// 并根据 Checkbox 的 label，设置一次当前 Checkbox 的选中状态。
// 这样无论是由内而外选择，或由外向内修改数据，都是双向绑定的，而且支持动态增加 Checkbox 的数量。
// 表单校验
  import Emitter from '../../mixins/emitter.js';
  //
  import { findComponentsDownward } from '../../utils/assist.js';

  export default {
    name: 'iCheckboxGroup',
    mixins: [ Emitter ],
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        currentValue: this.value,
        childrens: []
      }
    },

    methods: {
      updateModel (update) {
        this.childrens = findComponentsDownward(this, 'iCheckbox');
        if(this.childrens) {
          const { value } = this;
          this.childrens.forEach( child => {
            child.model = value;

            if(update) {
              child.currentValue = value.indexOf(child.label) >= 0;
              child.group = true;
            }
          })
        }
      },

      change (data) {
        this.currentValue = data;
        this.$emit('input', data);
        this.$emit('on-change', data);
        this.dispatch('iFormItem', 'on-form-change', data);
      }

    },

    mounted () {
      this.updateModel(true)
    },

    watch: {
      value () {
        this.updateModel(true);
      }
    }
  }
</script>

