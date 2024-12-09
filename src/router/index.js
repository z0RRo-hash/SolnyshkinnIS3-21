import { createRouter, createWebHistory } from 'vue-router';
import Basket from '../page/Basket.vue';
import Catalog from '../page/Catalog.vue';
import HomePage from '../page/HomePage.vue';
import About from '../page/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/Basket',
    name: 'Basket',
    component: Basket,
  },
  { 
    path: '/about', 
    name: 'About', 
    component: About, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
