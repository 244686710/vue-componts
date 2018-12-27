import Vue from 'vue';
import VueRouter from 'vue-router';
import FormTest from '../pages/formTest'
import FindComponents from '../pages/findComponents'

Vue.use(VueRouter);

const routes = [
  { path: '/formTest', component: FormTest, name: 'formTest' },
  { path: '/findComponents', component: FindComponents, name: 'findComponents' }
]

const router = new VueRouter({
  routes
})

export default router
