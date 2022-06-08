import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cutlery from '../views/Cutlery.vue'
import Bar from '../views/Bar.vue'
import Trolley from '../views/Trolley.vue'
import Tableware from '../views/Tableware.vue'
import Belly from '../views/Belly.vue'
import Chafing from '../views/Chafing.vue'
import JuiceDispensers from '../views/Dispenser.vue'
import Snack from '../views/Snack.vue'
import PageNotFound from '../views/PageNotFound.vue'


const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ,
  {
    path: '/cutlery',
    name: 'cutlery',
    component : Cutlery
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    
  }
  ,
  {
    path: '/bar-accessories',
    name: 'Bar Accessories',
    component : Bar    
  },
  {
    path: '/trolley',
    name:'Trolley',
    component : Trolley    
  },
  {
    path: '/tableware',
    name:'Tableware',
    component : Tableware    
  },
  {
    path: '/belly-serving-sets',
    name:'Belly',
    component : Belly    
  },
  {
    path: '/chafing-dishes',
    name:'Chafing Dishes',
    component : Chafing    
  },
  {
    path: '/juice-dispensers',
    name:'Juice Dispensers',
    component : JuiceDispensers    
  },
  {
    path: '/snack-serving-sets',
    name:'Snack',
    component : Snack    
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
