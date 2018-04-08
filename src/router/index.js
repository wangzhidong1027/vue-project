import Vue from 'vue'
import Router from 'vue-router'
import Findmore from '@/components/Findmore'
import Home from '@/components/Home'
import Category from '@/components/Category'
import Main from '@/components/Main'
import Car from '@/components/Car'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Detail from '@/components/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',name: 'Home',component: Home},
    {path:'/findmore',name: 'findmore',component: Findmore},
    {path:'/category',name: 'category',component: Category,
   	 children: [	
   		 {path: '/category/car',name: 'car', component: Car} 		
   		 ]
    },
    {path:'/main',name: 'Main',component: Main},
    {path:'/login',name: 'Login',component: Login},
    {path:'/register',name: 'Register',component: Register},
     {path:'/detail/:Id',name: 'Detail',component: Detail},
    {path:'/',redirect:"/home"},
    {path:'*',redirect:"/home"}
  ]
})
	
    	