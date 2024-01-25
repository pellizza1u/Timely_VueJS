import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectDetails from '../views/ProjectDetails.vue';
import EditProject from '../views/EditProject.vue';
import ActivityDetails from '../views/ActivityDetails.vue';
import EditActivity from '../views/EditActivity.vue';
import DailyObjectives from '../views/DailyObjectives.vue';
import TimeEntries from '../views/TimeEntries.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/projects/:id',
      name: 'ProjectDetails',
      component: ProjectDetails,
      children: [
        {
          path: 'edit',
          name: 'EditProject',
          component: EditProject,
        },
      ],
    },
    {
      path: '/activities/:id',
      name: 'ActivityDetails',
      component: ActivityDetails,
      children: [
        {
          path: 'edit',
          name: 'EditActivity',
          component: EditActivity,
        },
      ],
    },
    {
      path: '/daily-objectives',
      name: 'DailyObjectives',
      component: DailyObjectives,
    },
    {
      path: '/time-entries',
      name: 'TimeEntries',
      component: TimeEntries,
    },
  ],
});

export default router;
