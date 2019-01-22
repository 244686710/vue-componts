<template>
  <div>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item>
        <i-checkbox-group  @on-change="handleCurrentChange" v-model="formValidate.value">
          <i-checkbox label="a">checkboxA</i-checkbox>
          <i-checkbox label="b">checkboxB</i-checkbox>
        </i-checkbox-group>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>
<script>
  import iForm from '../components/form/form.vue';
  import iFormItem from '../components/form/form-item.vue';
  import iInput from '../components/input/input.vue';
  import iCheckboxGroup from '../components/checkbox/checkbox-group.vue'
  import iCheckbox from '../components/checkbox/checkbox.vue'

  export default {
    components: {
      iForm,
      iFormItem,
      iInput,
      iCheckboxGroup,
      iCheckbox
    },
    data() {
      return {
        formValidate: {
          name: '',
          mail: '',
          value: []
        },
        ruleValidate: {
          name: [{
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }],
          mail: [{
              required: true,
              message: '邮箱不能为空',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '邮箱格式不正确',
              trigger: 'blur'
            }
          ],
        }
      }
    },
    methods: {
      handleSubmit () {
        this.$refs.form.validate((valid) => {
          if(valid) {
            window.alert('提交成功')
            console.log(this.formValidate)
          } else {
            window.alert('表单校验失败')
          }
        })
      },

      handleReset() {
        this.$refs.form.resetFields();
      },

      handleCurrentChange(val) {
        console.log('checkboxGroup',val)
      }
    }
  }

</script>
