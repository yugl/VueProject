import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Content from '@/components/content'
import Words from '@/components/words' 

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Index',
		component: Index,
		children: [{ 
			path: "/",
			name: 'Content',
			component: Content 
		},{ 
			path: "/Content/:id",
			name: 'Content',
			component: Content 
		},,{ 
			path: "/Words/:id",
			name: 'Words',
			component: Words 
		}]  
	}]
});
