import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Importamos auth
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: '/',
    
    name: 'home',
    
    component: HomeView
  },
  {
    path: '/habilidades',
    name: 'habilidades',
    // Añadimos el meta: a la ruta
    meta: {requiresAuth: true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HabilidadesView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// Incluimos la función
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    const auth = getAuth();
    const usuario = auth.currentUser;
    console.log ('usuario desde router', usuario)
    if(!usuario){
      next({path: '/'})
    }else{
      next()
    }
  } else {
    next()
  }
})

export default router
