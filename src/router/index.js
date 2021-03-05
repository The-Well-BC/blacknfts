// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home.vue';
import Artists from '../views/artistList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/artists',
    name: 'Artists',
    component: Artists
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
