import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AppProjects from '../views/AppProjects.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects,
    }
  ]
});

// Aggiungi comportamento di scroll dolce per hash
router.afterEach((to, from) => {
  const sectionId = to.hash;
  if (sectionId) {
    setTimeout(() => {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Ritarda per assicurare che il DOM sia aggiornato
  }
});

export default router;
