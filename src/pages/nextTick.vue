/*
 * @Author: Yuyd
 * @Date: 2019-01-24 15:02:16
 * @Last Modified by: Yuyd
 * @Last Modified time: 2019-01-24 15:16:16
 */
 <template>
   <div>
      <h3>nextTick使用</h3>
      <p>nextTick 函数接收一个回调函数 cb，在下一个 DOM 更新循环之后执行。比如下面的示例：</p>
      <p v-if="show" ref="node">内容</p>
      <button @click="handleShow">显示</button>
   </div>
 </template>
 <script>
 export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleShow () {
      this.show = true;
      console.log(this.$refs.node);  // undefined
      this.$nextTick(() => {
        console.log(this.$refs.node);  // <p>内容</p>
      });
    }
  }
 }
 </script>
