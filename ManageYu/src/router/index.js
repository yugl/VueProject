import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/login';//登录引用
import Index from '@/components/main/index';//公共部分
import FormMain from '@/components/autoform/main';//自动表单-主页
import FormDefault from '@/components/autoform/default';//自动表单-默认页
import FormEdit from '@/components/autoform/edit';//自动表单-编辑
import FormView from '@/components/autoform/view';//自动表单-视图
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
      	path: "/",
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
		  },{ 
        path: "/FormMain",
        name: '/FormMain',
        component: FormMain,
        children: [{
          path: "/",
          name: '/FormDefault',
          component: FormDefault  
        },{ 
          path: "/FormEdit",
          name: '/FormEdit',
          component: FormEdit  
        },{ 
          path: "/FormView",
          name: '/FormView',
          component: FormView  
        }]  
      }] 
    }]
});
