Vue.component('aa', Vue.extend({
	template: `<div><button @click="tapme">点我</button>
	{{content}}
	</div>`, 
	data: function(){
		return {
			msg: '我是demo1'
		}
	},
	props: ['content'],
	methods: {
		tapme: function(){
			alert('点我 ')
		},
	}
}));