Vue.component('bb', Vue.extend({
	template: `<div><button @click="tapme">点我</button>
	{{msg}}
	</div>`,
	data: function(){
		return {
			msg: '我是demo2'
		}
	},
	methods: {
		tapme: function(){
			alert('点我55 ')
		},
	}
}));

