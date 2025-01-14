import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Servs from '@/Pages/AvaliableServices'
import Custs from '@/Pages/Customers'
import Tra from '@/Pages/Transactions'
import Login from '@/Pages/AdminLogin'

// import Body from '@/components/BodyRender'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Moyen',
      component: Index
    },
    
    {
      path: '/services',
      name: 'Avaliable Services',
      component: Servs
    },
    
    {
      path: '/customers',
      name: 'Registered Customers',
      component: Custs
    },
    
    {
      path: '/log/:one', // one: the exactly transition logger.
      name: 'Transaction Logs',
      component: Tra
    },    
    {
      path: '/login', // one: the exactly transition logger.
      name: 'Logni',
      component: Login
    },
    
  ]
})
