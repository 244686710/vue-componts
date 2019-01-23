export default {
  functional: true,
  // row：当前行的数据；
  // column：当前列的数据；
  // index：当前是第几行；
  // render：具体的 render 函数内容。
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function
  },

  render(h, ctx) {
    const params = {
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index
    }
    
    return ctx.props.render(h, params);
  },
}
