import Vue from 'vue'
import Router from 'vue-router'
import Cars from '@/components/Cars'
import Home from '@/components/Home'
import Places from '@/components/Places'
import Hotels from '@/components/Hotels'
import Events from '@/components/Events'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/cars',
      name: 'Cars',
      component: Cars
    },
    {
      path: '/places',
      name: 'Places',
      component: Places
    },
    {
        path: '/hotels',
        name: 'Hotels',
        component: Hotels
      },
      {
        path: '/events',
        name: 'Events',
        component: Events
      }
  ]
})