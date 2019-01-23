import Vue from 'vue';
import VueRouter from 'vue-router';
import FormTest from '../pages/formTest'
import FindComponents from '../pages/findComponents'
import Display from '../pages/display'
import Alert from '../pages/alert'

Vue.use(VueRouter);

const routes = [
  { path: '/formTest', component: FormTest, name: 'formTest' },
  { path: '/findComponents', component: FindComponents, name: 'findComponents' },
  { path: '/display', component: Display, name: 'display' },
  { path: '/alert', component: Alert, name: 'alert' }
]

const router = new VueRouter({
  routes
})

export default router
