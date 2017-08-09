import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/login';//登录引用
import Index from '@/components/main/index';//公共部分
import Homepage from '@/components/main/homepage';//主页内容
 

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
      	name: '/Login',
      	component: Login 
  	},{
  		path: '/Index',
      	name: '/Index',
      	component: Index,
      	children: [{ 
      		path: "/",
		    name: '/Homepage',
		    component: Homepage  
		}]  
    }]
});
