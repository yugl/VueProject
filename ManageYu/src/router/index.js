import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/login';//登录引用
import Index from '@/components/main/index';//公共部分
import EnglishMain from '@/components/english/main';//英语-主页
import EnglishListChap from '@/components/english/listchap';//英语-章节列表
import EnglishAddChap from '@/components/english/addchap';//英语-添加章节
import EnglishAddWords from '@/components/english/addwords';//英语-添加章节单词 

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
      	path: "/EnglishMain",
		    name: '/EnglishMain',
		    component: EnglishMain,
        children: [{ 
          path: "/EnglishListChap",
          name: '/EnglishListChap',
          component: EnglishListChap  
        },{ 
          path: "/EnglishAddChap",
          name: '/EnglishAddChap',
          component: EnglishAddChap  
        },{ 
          path: "/EnglishAddWords",
          name: '/EnglishAddWords',
          component: EnglishAddWords  
        }]  
		  }] 
    }]
});
