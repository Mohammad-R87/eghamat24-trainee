import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks/Tasks.vue'
import Add from '../views/Add/Add.vue'
import NotFound from '../components/NotFound'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/new',
    name: 'AddTask',
    component: Add
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
