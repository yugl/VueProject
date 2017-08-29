<template>
	<div class="y-nav">
		<router-link class="y-nav-link" v-for="(item, index) in navdata" :to='"/Content/"+ ( index + 1 )'>
			<span @click="visited(index)" class="y-nav-item" :class="index == 0 ? 'y-visited' : ''"><span class="y-nav-word">D</span><span>{{item}}</span></span>
		</router-link> 
	</div> 
</template>

<script> 
	
export default { 
	data() {
		return {   
		}
	},
	computed:{
		navdata(){
			var _arry = [];
			for(var i = 1, l = 30; i < l; i++){
				var _d = i;
				_arry.push( _d );
			};
			return _arry;
		}
	},
	methods: {
		visited( index ){ 
			var navItemEl = document.querySelectorAll('.y-visited');
			var currentEl = document.querySelectorAll('.y-nav-item')[index];

			if( navItemEl.length > 0 ){ 
				navItemEl[0].classList.remove('y-visited');
			}; 
			currentEl.classList.add('y-visited');  
		}
	}
}
</script> 
<style>  
</style>
