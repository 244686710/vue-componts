import Vue from 'vue';
import VueRouter from 'vue-router';
import FormTest from '../pages/formTest'
import FindComponents from '../pages/findComponents'
import Dispaly from '../pages/display'

Vue.use(VueRouter);

const routes = [
  { path: '/formTest', component: FormTest, name: 'formTest' },
  { path: '/findComponents', component: FindComponents, name: 'findComponents' },
  { path: '/dispaly', component: Dispaly, name: 'dispaly' }
]

const router = new VueRouter({
  routes
})

export default router
