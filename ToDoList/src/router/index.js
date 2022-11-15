import { createRouter, createWebHistory } from 'vue-router'

import Tasks from '../views/Tasks.vue'
import CreateTask from '../views/CreateTask.vue'
import NotFound from '../components/NotFound'

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/create-task',
    name: 'create',
    component: CreateTask
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
