import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '@/views/Dashboard/index.vue';
import Jobs from '../views/Dashboard/Jobs.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/jobs',
    name: 'dashobard',
    component: Dashboard,
    children: [
      {
        alias: 'job-list',
        path: '',
        component: Jobs,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
