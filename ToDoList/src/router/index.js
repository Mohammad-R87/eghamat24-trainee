import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks/Tasks.vue'
import Add from '../views/Add/Add.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
