import Vue from 'vue';
import VueRouter from 'vue-router';
import FormTest from '../pages/formTest'
import FindComponents from '../pages/findComponents'
import Display from '../pages/display'
import Alert from '../pages/alert'
import TableRender from '../pages/table-render.vue'
import TableSlot from '../pages/table-slot.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/formTest', component: FormTest, name: 'formTest' },
  { path: '/findComponents', component: FindComponents, name: 'findComponents' },
  { path: '/display', component: Display, name: 'display' },
  { path: '/alert', component: Alert, name: 'alert' },
  { path: '/table-render', component: TableRender, name: 'table-render' },
  { path: '/table-slot', component: TableSlot, name: 'table-slot' },
]

const router = new VueRouter({
  routes
})

export default router
